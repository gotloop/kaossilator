import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { scales } from "../_stories/programs.fixture";
import { Select } from "./select.component";

const meta = {
  title: "Atoms/Select",
  component: Select,
  args: { options: scales, value: "ION", onValueChange: () => {}, label: "Scale" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: function Render(args) {
    const [value, setValue] = useState("ION");
    return (
      <div className={css({ width: "260px", display: "flex", flexDirection: "column", gap: "6" })}>
        <Select {...args} value={value} onValueChange={setValue} />
        <Select {...args} tone="light" label="Scale (light)" value={value} onValueChange={setValue} />
      </div>
    );
  },
};

export const ArpPattern: Story = {
  render: function Render() {
    const [value, setValue] = useState("G.28");
    const options = Array.from({ length: 50 }, (_, i) => {
      const code = `G.${String(i).padStart(2, "0")}`;
      return { value: code, label: code };
    });
    return (
      <div className={css({ width: "180px" })}>
        <Select label="Gate arp pattern" options={options} value={value} onValueChange={setValue} />
      </div>
    );
  },
};
