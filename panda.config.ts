import { defineConfig } from "@pandacss/dev";

/**
 * Kaossilator design system.
 *
 * Look: 1960s Braun audio (clean aluminium greys, black faceplates, plastic
 * keys you can press), with the yellow / cyan of the Kaossilator gate arp card
 * (doc/images/KaossArpegBIG.jpg) and a Braun orange as accents.
 */
export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: true,
  include: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",

  globalCss: {
    body: {
      fontFamily: "body",
      color: "fg",
      bg: "surface.panel",
      WebkitFontSmoothing: "antialiased",
    },
  },

  theme: {
    extend: {
      tokens: {
        colors: {
          // Braun-style aluminium / plastic greys, warm-neutral.
          aluminium: {
            50: { value: "#f6f6f4" },
            100: { value: "#ecece9" },
            200: { value: "#dcdcd8" },
            300: { value: "#c6c6c1" },
            400: { value: "#a9a9a4" },
            500: { value: "#8b8b87" },
            600: { value: "#6e6e6b" },
            700: { value: "#50504e" },
            800: { value: "#343433" },
            900: { value: "#1f1f1e" },
            950: { value: "#121211" },
          },
          // Sampled from the gate arp card background rows.
          cardYellow: {
            200: { value: "#ffe9a3" },
            300: { value: "#ffdd6e" },
            400: { value: "#ffcf3e" },
            500: { value: "#f5bd1a" },
            600: { value: "#d69c00" },
          },
          cardCyan: {
            200: { value: "#c7e3f2" },
            300: { value: "#a0cde7" },
            400: { value: "#6ebee3" },
            500: { value: "#3fa6d6" },
            600: { value: "#2387b8" },
          },
          // Braun T1000 / SK-style orange.
          braunOrange: {
            300: { value: "#ff9b6e" },
            400: { value: "#ff7a45" },
            500: { value: "#ff5a1f" },
            600: { value: "#e04310" },
          },
          // Red 7-segment LCD.
          lcd: {
            on: { value: "#ff3b1f" },
            off: { value: "#3b100a" },
            glass: { value: "#160705" },
          },
        },
        fonts: {
          body: {
            value:
              '"Helvetica Neue", Helvetica, "Nimbus Sans", Arial, sans-serif',
          },
          lcd: {
            value:
              '"DSEG7 Classic", "Share Tech Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
          },
        },
        radii: {
          key: { value: "5px" },
          panel: { value: "10px" },
        },
        shadows: {
          // Raised plastic key: highlight on top, darker lip, drop shadow.
          keyRaised: {
            value:
              "inset 0 1px 0 rgba(255,255,255,.9), inset 0 -2px 0 rgba(0,0,0,.07), 0 2px 0 #9b9b96, 0 3px 5px rgba(0,0,0,.28)",
          },
          // Momentarily pushed down (while :active).
          keyPushed: {
            value:
              "inset 0 1px 2px rgba(0,0,0,.18), inset 0 -1px 0 rgba(255,255,255,.4), 0 0 0 #9b9b96, 0 1px 1px rgba(0,0,0,.25)",
          },
          // Latched down (toggle on): sits lower than raised, shaded inside.
          keyLatched: {
            value:
              "inset 0 2px 3px rgba(0,0,0,.22), inset 0 -1px 0 rgba(255,255,255,.5), 0 1px 0 #9b9b96, 0 1px 2px rgba(0,0,0,.2)",
          },
          keyDarkRaised: {
            value:
              "inset 0 1px 0 rgba(255,255,255,.18), inset 0 -2px 0 rgba(0,0,0,.4), 0 2px 0 #000, 0 3px 5px rgba(0,0,0,.45)",
          },
          keyDarkPushed: {
            value:
              "inset 0 1px 3px rgba(0,0,0,.6), 0 0 0 #000, 0 1px 1px rgba(0,0,0,.4)",
          },
          // A recess cut into the panel (wells, tracks, LCD windows).
          well: {
            value:
              "inset 0 1px 3px rgba(0,0,0,.28), inset 0 -1px 0 rgba(255,255,255,.7)",
          },
          wellDark: {
            value:
              "inset 0 2px 4px rgba(0,0,0,.75), 0 1px 0 rgba(255,255,255,.12)",
          },
          panel: {
            value:
              "inset 0 1px 0 rgba(255,255,255,.8), 0 1px 2px rgba(0,0,0,.15), 0 8px 24px rgba(0,0,0,.12)",
          },
        },
        durations: {
          key: { value: "70ms" },
        },
      },

      semanticTokens: {
        colors: {
          fg: {
            DEFAULT: { value: "{colors.aluminium.900}" },
            muted: { value: "{colors.aluminium.600}" },
            subtle: { value: "{colors.aluminium.500}" },
            onDark: { value: "{colors.aluminium.100}" },
            onDarkMuted: { value: "{colors.aluminium.400}" },
          },
          surface: {
            panel: { value: "{colors.aluminium.100}" },
            raised: { value: "{colors.aluminium.50}" },
            well: { value: "{colors.aluminium.200}" },
            deep: { value: "{colors.aluminium.950}" },
            deepRaised: { value: "{colors.aluminium.900}" },
          },
          border: {
            DEFAULT: { value: "{colors.aluminium.400}" },
            subtle: { value: "{colors.aluminium.300}" },
            strong: { value: "{colors.aluminium.600}" },
          },
          accent: {
            yellow: { value: "{colors.cardYellow.400}" },
            cyan: { value: "{colors.cardCyan.400}" },
            orange: { value: "{colors.braunOrange.500}" },
          },
          led: {
            off: { value: "{colors.aluminium.700}" },
            yellow: { value: "{colors.cardYellow.300}" },
            cyan: { value: "{colors.cardCyan.300}" },
            orange: { value: "{colors.braunOrange.400}" },
            red: { value: "{colors.lcd.on}" },
            green: { value: "#5be37a" },
          },
          focus: { value: "{colors.cardCyan.500}" },
        },
      },

      keyframes: {
        ledPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
    },
  },
});
