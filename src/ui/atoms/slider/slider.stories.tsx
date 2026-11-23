import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { Slider } from "./slider.component";

const meta = {
  title: "Atoms/Slider",
  component: Slider,
  args: { value: 0.8, onValueChange: () => {}, label: "Volume" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const toDb = (v: number) => (v === 0 ? "-∞ dB" : `${(20 * Math.log10(v)).toFixed(1)} dB`);

export const LayerVolume: Story = {
  render: function Render() {
    const [value, setValue] = useState(0.63);
    return (
      <div className={css({ width: "320px", display: "flex", flexDirection: "column", gap: "4" })}>
        <Slider label="Volume" showLabel value={value} onValueChange={setValue} format={toDb} />
        <Slider label="Volume (compact)" value={value} onValueChange={setValue} />
      </div>
    );
  },
};
