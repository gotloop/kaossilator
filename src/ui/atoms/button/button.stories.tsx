import type { Meta, StoryObj } from "@storybook/react-vite";
import { css } from "../../../../styled-system/css";
import { Button } from "./button.component";

const row = css({ display: "flex", gap: "4", alignItems: "center", flexWrap: "wrap" });

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: { children: "TAP", tone: "light", size: "md", shape: "rect", disabled: false },
  argTypes: {
    tone: { control: "inline-radio", options: ["light", "dark", "orange"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    shape: { control: "inline-radio", options: ["rect", "round"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div className={row}>
      <Button>Keep</Button>
      <Button tone="dark">TAP</Button>
      <Button tone="orange">Clear all</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className={row}>
      <Button size="sm">−</Button>
      <Button size="md">Discard</Button>
      <Button size="lg" tone="dark">
        TAP
      </Button>
    </div>
  ),
};

export const Round: Story = {
  render: () => (
    <div className={row}>
      <Button shape="round" size="lg" aria-label="Play">
        ▶
      </Button>
      <Button shape="round" size="lg" tone="orange" aria-label="Record">
        ●
      </Button>
      <Button shape="round" size="lg" tone="dark" aria-label="Stop">
        ■
      </Button>
    </div>
  ),
};
