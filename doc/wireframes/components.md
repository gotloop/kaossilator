# UI components: atoms and molecules

The building blocks needed for the wireframes in this folder ([desktop](./desktop.svg), [layers](./layers.svg), [mobile](./mobile.svg)). Organisms and templates will come later.

## Dedicated components (not atoms)

These are canvas-based, interactive surfaces with their own drawing and pointer logic. They aren't generic UI.

| Component        | Role                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------- |
| **TouchPad**     | The XY pad: live crosshair and ripples, dead-zone border, scale tick marks, faded trails of the layers. |
| **LayerTimeline** | One layer's touch data over the loop: pitch on the scale grid, Y value as line thickness, finger down/up markers, playhead, range selection. |
| **GatePatternPreview** | A small read-only drawing of a gate arp pattern (from [gate-arpeggiator.md](../gate-arpeggiator.md)). Could be plain SVG. |

## Atoms

| Atom                 | Variants / states                                                    | Used for                                          | Role / a11y |
| -------------------- | -------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| **Button**           | `default`, `primary` (dark: TAP), `danger` (red outline: REC); sizes `sm` / `md` / `lg` / `round` (mobile transport); with icon, text or both; disabled | TAP, Keep, Discard, Clear, −/+, Rename, Delete    | `button` |
| **IconButton**       | Square, icon only; needs a tooltip/`aria-label`                      | Trash on layer rows, sheet close                  | `button` |
| **ToggleButton**     | Off / on (pressed); `sm` (M, S) and `md`                             | Mute, Solo, REC (toggle-only recording), Play/Stop | `button` + `aria-pressed` |
| **HoldButton**       | Idle / held. Active only while pressed: pointerdown → start, pointerup/cancel/leave → stop | Erase                                             | `button`; key held = held |
| **Switch**           | Off / on, disabled                                                   | Gate arp on/off                                   | `switch` |
| **SegmentedControl** | N options, one selected; option labels can be text or icon; equal widths; supports many options (12 notes) | Loop length, notes C…B, octave 3/4/5              | `radiogroup` (arrow keys) |
| **Tabs**             | Horizontal tab list, one active                                      | Program categories `L a b c S d P`                | `tablist` |
| **Select**           | Closed / open, with a selected value; options can have a sub-label   | Scale, arp pattern                                | `combobox` / `listbox` |
| **ListItem**         | Default / hover / selected; a primary label plus an optional secondary label (number) | Program list rows, select options                 | `option` |
| **ScrollArea**       | Vertical; styled scrollbar; scroll-into-view for the selected item     | Program list, layers list, sheets                 | — |
| **Slider**           | Horizontal; min/max/step; optional value readout (`-4 dB`)           | Layer volume                                      | `slider` |
| **NumberInput**      | Type a value, drag up/down or scroll to change it; min/max/step; big display variant | BPM                                               | `spinbutton` |
| **ProgressBar**      | Linear, 0–1; colour shows status (rec / play / idle)                   | Loop position (mobile)                            | `progressbar` |
| **RotaryProgress**   | Ring, 0–1, with a centre label slot; colour shows status               | Loop position (desktop)                           | `progressbar` |
| **LcdDisplay**       | Red 7-segment-style text, 3–4 characters (`L.00`, `G.28`, `Ion`)      | Program number in the header / status strip       | text, `aria-live` if it updates |
| **Label**            | Small uppercase section caption (`TEMPO`, `LOOP LENGTH`)              | Every section header                              | `<label>` / heading |
| **Text**             | `body`, `strong`, `muted`, `hint` (small grey help line)               | Names, sub-labels, hints                          | — |
| **Icon**             | record ●, play ▶, stop ■, trash, undo ↶, check ✓, scissors, duplicate, note ♪, chevron, sound/tempo/loop/layers tab icons | Inside buttons and tabs                           | decorative or labelled |
| **ColorSwatch**      | A small filled bar/square in a layer's colour                          | Layer rows                                        | decorative |
| **Badge**            | `neutral`, `warning` (orange `UNSAVED`)                               | Unsaved take, counts ("3 layers")                 | — |
| **Kbd**              | Keyboard shortcut hint (`R`, `T`, `Space`)                             | Hints, tooltips                                   | — |
| **Tooltip**          | Shown on hover/focus                                                 | Icon buttons, truncated names                     | `tooltip` |
| **Divider**          | Horizontal / vertical                                                | Panels, menus                                     | `separator` |
| **Surface**          | `panel` (grey box), `card`, `sheet` (rounded top + drag handle), `popover` | All containers                                    | — |
| **MenuItem**         | Icon + label; hover/focus; disabled; `danger`                         | Selection context menu                            | `menuitem` |

## Molecules

Each molecule combines a few atoms into one control with one job.

| Molecule              | Made of                                                        | Behaviour                                                         |
| --------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Field**             | Label + any control + optional hint Text                        | The standard wrapper for every setting section                      |
| **LabelledSwitch**    | Switch + Text                                                   | Clicking the label toggles the switch                               |
| **ProgramDisplay**    | LcdDisplay + Text (name)                                        | Header / status strip; on mobile, clicking it opens the Sound sheet |
| **StatusSummary**     | Surface (chip) + Text                                           | `120 BPM · C4 · ION · ARP G.28`, read-only                            |
| **ProgramCategoryTabs** | Tabs                                                          | Picks a category; also filters the list below                       |
| **ProgramList**       | ScrollArea + ListItem ×N                                        | Pick a program; arrow keys / ←→ step through; selected item scrolls into view |
| **ScaleSelect**       | Field + Select (options `ION · Ionian` …)                       | 31 scales + OFF                                                     |
| **KeyPicker**         | SegmentedControl (12 notes) + SegmentedControl (Oct 3/4/5)      | Gives a key from C3 to B5                                           |
| **BpmStepper**        | Button(−) + NumberInput + Button(+)                             | ± steps; holding ± repeats                                          |
| **TapTempoButton**    | Button (primary) + Kbd                                          | Averages the intervals between the last few taps; resets after a pause |
| **TempoControl**      | Field + BpmStepper + TapTempoButton                             | —                                                                 |
| **LoopLengthControl** | Field + SegmentedControl (`1/16 … 8`)                           | —                                                                 |
| **GateArpControl**    | Switch + Select (pattern) + GatePatternPreview                  | The preview follows the selected pattern; it's dimmed when the switch is off |
| **AxisLegend**        | Text ×2 + Badge-like markers                                    | `X: Note · Y: Ambient Depth`, plus whether Scale ○ / Arp ○ apply      |
| **RecButton**         | ToggleButton (`danger`) + Icon ●                                | Click to start/stop recording; pulses while recording               |
| **PlayStopButton**    | ToggleButton + Icon ▶/■                                         | —                                                                 |
| **EraseButton**       | HoldButton + Text "hold"                                        | Erases while held, during playback                                  |
| **TransportBar**      | RecButton + PlayStopButton + EraseButton                        | Horizontal row on both layouts                                      |
| **TakeActions**       | Badge (`UNSAVED`) + Button Keep / Discard / Clear all           | Keep/Discard only appear while there's an unsaved take; Clear all asks for confirmation |
| **LoopStatus**        | RotaryProgress *or* ProgressBar + Text (`Playing · beat 6 of 8`) | Status colour: red = recording, green = playing, grey = stopped     |
| **LayerHeader**       | ColorSwatch + Text (name) + Text (program sub-label) + Badge    | Rename by double-click                                              |
| **LayerControls**     | ToggleButton M + ToggleButton S + Slider (volume) + IconButton (delete) | —                                                         |
| **ContextMenu**       | Surface (popover) + MenuItem ×N + Divider                       | Shown on a timeline selection: Erase, Duplicate to new layer, Re-quantize |
| **TabBarItem**        | Icon + Text                                                     | Active state (mobile bottom nav)                                     |
| **BottomSheet**       | Surface (sheet) + drag handle + ScrollArea                      | Swipe down / click outside to close; the pad stays interactive above it |
| **ConfirmDialog**     | Surface + Text + Button ×2                                      | Confirms Clear all and layer delete (not drawn in the wireframes)   |

## Shared building blocks to decide early

- **Design tokens:** layer colour palette, status colours (rec red, play green, warning orange), spacing, radii.
- **Pointer/keyboard model:** a shared "press" hook used by Button, ToggleButton, HoldButton and TapTempoButton. HoldButton especially must handle `pointercancel` and `pointerleave`.
- **Atom binding:** atoms stay presentational (value + onChange). Molecules (or organisms) bind them to Jotai atoms.
