import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { ToggleButton } from "./toggle-button.component";

const row = css({ display: "flex", gap: "4", alignItems: "center", flexWrap: "wrap" });

const meta = {
  title: "Atoms/ToggleButton",
  component: ToggleButton,
  args: { pressed: false, onPressedChange: () => {}, children: "M" },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MuteSolo: Story = {
  render: function Render() {
    const [mute, setMute] = useState(false);
    const [solo, setSolo] = useState(true);
    return (
      <div className={row}>
        <ToggleButton size="sm" pressed={mute} onPressedChange={setMute} aria-label="Mute">
          M
        </ToggleButton>
        <ToggleButton size="sm" pressed={solo} onPressedChange={setSolo} aria-label="Solo">
          S
        </ToggleButton>
      </div>
    );
  },
};

export const WithLed: Story = {
  render: function Render() {
    const [rec, setRec] = useState(false);
    const [play, setPlay] = useState(true);
    const [arp, setArp] = useState(false);
    return (
      <div className={row}>
        <ToggleButton size="lg" led="red" pulse pressed={rec} onPressedChange={setRec}>
          REC
        </ToggleButton>
        <ToggleButton size="lg" led="green" pressed={play} onPressedChange={setPlay}>
          PLAY
        </ToggleButton>
        <ToggleButton size="lg" tone="dark" led="yellow" pressed={arp} onPressedChange={setArp}>
          GATE ARP
        </ToggleButton>
      </div>
    );
  },
};
