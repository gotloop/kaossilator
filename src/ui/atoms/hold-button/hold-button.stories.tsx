import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { Led } from "../led/led.component";
import { HoldButton } from "./hold-button.component";

const row = css({ display: "flex", gap: "4", alignItems: "center" });

const meta = {
  title: "Atoms/HoldButton",
  component: HoldButton,
  args: { onHoldStart: () => {}, onHoldEnd: () => {}, children: "ERASE" },
} satisfies Meta<typeof HoldButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Erase: Story = {
  render: function Render() {
    const [held, setHeld] = useState(false);
    return (
      <div className={row}>
        <HoldButton size="lg" onHoldStart={() => setHeld(true)} onHoldEnd={() => setHeld(false)}>
          ERASE
        </HoldButton>
        <Led color="orange" on={held} size="lg" />
        <span>{held ? "erasing…" : "hold the key (mouse, touch, Space)"}</span>
      </div>
    );
  },
};
