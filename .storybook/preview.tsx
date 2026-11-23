import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/ui/panda.css";
import { css } from "../styled-system/css";

const canvas = css({
  minHeight: "100vh",
  p: "8",
  bg: "aluminium.200",
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(255,255,255,.22) 0px, rgba(255,255,255,0) 1px, rgba(0,0,0,.02) 2px, rgba(255,255,255,0) 3px)",
});

const darkCanvas = css({
  minHeight: "100vh",
  p: "8",
  bg: "aluminium.900",
});

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: { matchers: { color: /(background|color)$/i } },
    a11y: { test: "todo" },
  },
  globalTypes: {
    faceplate: {
      description: "Faceplate behind the components",
      toolbar: {
        title: "Faceplate",
        icon: "contrast",
        items: [
          { value: "light", title: "Aluminium" },
          { value: "dark", title: "Black" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { faceplate: "light" },
  decorators: [
    (Story, context) => (
      <main className={context.globals.faceplate === "dark" ? darkCanvas : canvas}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
