import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./switch.component";

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  args: { checked: false, onCheckedChange: () => {}, label: "Gate arp" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GateArp: Story = {
  render: function Render(args) {
    const [on, setOn] = useState(true);
    return <Switch {...args} checked={on} onCheckedChange={setOn} />;
  },
};

export const Disabled: Story = { args: { disabled: true, checked: true } };
