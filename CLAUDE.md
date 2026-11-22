# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project goal

A browser recreation of the **Korg Kaossilator**: a touchpad synth where the X axis sets pitch and the Y axis sets a second parameter (currently volume). Pitch gets snapped ("approximated") to the selected tonic + scale + octave, like the real device's key/scale setting. Deployed to GitHub Pages at https://gotloop.github.io/kaossilator/.

**The app is not working right now.** The branch is mid-refactor (kebab-case components, new audio-graph context) and dependencies were just upgraded. Don't assume existing behaviour is correct. Check it in a real browser with the Chrome DevTools MCP tools (`mcp__chrome-devtools__*`): run the dev server, open the page, click/drag on the touchpad canvas, then read the console messages and screenshots. jsdom tests can't exercise Web Audio or canvas.

`TouchPad` reads atoms with `store.get()` inside its `requestAnimationFrame` loop and pointer handlers, so dragging doesn't re-render React. Keep it that way: nothing in its render body should set state or touch `canvasRef.current`. Synthetic `PointerEvent`s dispatched from `evaluate_script` work for testing, but they don't get real pointer capture.

## Commands

Package manager is **pnpm** (version pinned via `packageManager` in `package.json`; Node >= 22.12, CI uses Node 24).

```sh
pnpm install
pnpm dev                 # Vite dev server (stylelint runs as a Vite plugin; eslint does not)
pnpm build               # tsc type-check, then vite build
pnpm test                # vitest in watch mode (jsdom, globals enabled)
pnpm test run            # single run
pnpm test run src/core/state.spec.ts      # single file
pnpm test run -t "renders hidden title"   # single test by name
pnpm coverage
pnpm lint                # eslint src (flat config: eslint.config.js)
pnpm stylelint
```

`tsc` type-checks spec files too (`vitest/globals` types). `vitest.config.ts` merges `vite.config.ts`, so aliases apply in tests.

Version pins that are deliberate, not oversights:

- **ESLint 9**, not 10: `eslint-plugin-import`, `jsx-a11y` and `react` don't support ESLint 10 yet.
- **TypeScript 6.0.x**, not 7: `typescript-eslint` needs the JS compiler API (its peer range is < 6.1).

## Architecture

The stack is React 19 + Jotai 3 for state, plus the raw Web Audio API. `tone`, `@tonaljs/tonal`, `three` and `@react-three/fiber` are dependencies, but they're unused or barely used so far.

Data flows one way: **UI → Jotai atoms → audio graph**.

- `src/core/state.ts`: all app state as Jotai atoms. Primitive atoms hold user settings (`waveFormAtom`, `octaveAtom`, `tonicAtom`, `scaleAtom`, `bpmAtom`) and touch input (`touchPositionAtom`, `touchpadSizeAtom`, `isPlayingAtom`). Derived atoms turn those into sound parameters: `pitchAtom`/`volumeAtom` come from position and size through `convertCoordinates` (`src/core/utils.ts`), then `scaleValuesAtom` → `offsetAtom` → `frequencyAtom`. The scale quantization logic belongs in this derived chain.
- `src/core/constants.ts`: music data. It holds the C-octave base frequencies (`octaves`), note → semitone map (`notesValues`), scale interval tables (`scalesIntervals`: diatonic modes plus `none`/`chromatic`) and the wave-form icons.
- `src/components/audio-graph/audio-graph.component.tsx`: creates a single `AudioContext` → oscillator → master gain **at module load**. It syncs those nodes to atoms through `jotai-effect` `atomEffect`s, which are activated by `useAtom(effect)` inside the `<AudioGraph>` wrapper rendered in `src/index.tsx`. Any new audio parameter should be wired up the same way.
- `src/components/touchpad/`: the canvas input surface. It writes position, size and playing state into atoms. `draw.utils.ts` holds the canvas drawing (crosshair, ripple circles kept in module-level state).
- `src/components/settings-form/`, `wave-buttons/`, `src/ui/selector/`: form controls bound straight to atoms.
- `old/`: the original CodePen implementation (`old/index.ts`), kept as a reference for the intended pitch/scale/octave behaviour. It isn't part of the build.

Jotai 3 dropped its Babel plugins, so atoms have no automatic debug labels in `jotai-devtools`. Labels are set by hand in a `DEV`-only block at the bottom of `state.ts` (and in `audio-graph.component.tsx` for effects); add one for every new atom.

Conventions: each component lives in its own kebab-case folder as `name.component.tsx` + `name.component.css`, with specs alongside as `*.spec.ts(x)`. `tsconfig.json` defines the path alias `@gotloop/kaossillator/*` → `src/*`.

## Known breakage (as of this snapshot)

Check these first when debugging:

- `frequencyAtom` ignores the scale, tonic and `octaves` table (`octave * 440 + pitch`). Quantization isn't implemented yet.
- `volumeAtom` maps the top of the pad to silence (`(y / h) * 2`), and `isPlayingAtom` doesn't gate the audio output.
- The `AudioContext` is created before any user gesture, so browser autoplay policy will leave it suspended until `resume()` is called.
- `state.spec.ts` calls `useAtomValue` outside a component.
