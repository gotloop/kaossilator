import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { Label } from "../label/label.component";
import { SegmentedControl } from "./segmented-control.component";

const stack = css({ display: "flex", flexDirection: "column", gap: "2", maxWidth: "420px" });

const meta = {
  title: "Atoms/SegmentedControl",
  component: SegmentedControl,
  args: {
    label: "Loop length",
    value: "8",
    onValueChange: () => {},
    options: [],
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const lengths = ["1/16", "1/8", "1/4", "1/2", "1", "2", "4", "8"].map((v) => ({ value: v, label: v }));
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"].map((v) => ({ value: v, label: v }));
const octaves = ["3", "4", "5"].map((v) => ({ value: v, label: `Oct ${v}` }));

export const LoopLength: Story = {
  render: function Render() {
    const [value, setValue] = useState("8");
    return (
      <div className={stack}>
        <Label as="span">Loop length (beats)</Label>
        <SegmentedControl label="Loop length" options={lengths} value={value} onValueChange={setValue} />
      </div>
    );
  },
};

export const Key: Story = {
  render: function Render() {
    const [note, setNote] = useState("C");
    const [octave, setOctave] = useState("4");
    return (
      <div className={stack}>
        <Label as="span">Key</Label>
        <SegmentedControl label="Root note" size="sm" accent="cyan" options={notes} value={note} onValueChange={setNote} />
        <SegmentedControl label="Octave" size="sm" accent="cyan" options={octaves} value={octave} onValueChange={setOctave} />
      </div>
    );
  },
};

export const Accents: Story = {
  render: function Render() {
    const [a, setA] = useState("2");
    return (
      <div className={stack}>
        {(["yellow", "cyan", "orange"] as const).map((accent) => (
          <SegmentedControl
            key={accent}
            label={`Accent ${accent}`}
            accent={accent}
            options={lengths.slice(4)}
            value={a}
            onValueChange={setA}
          />
        ))}
      </div>
    );
  },
};
