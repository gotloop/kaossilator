import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { Button } from "../button/button.component";
import { HoldButton } from "../hold-button/hold-button.component";
import { Label } from "../label/label.component";
import { LcdDisplay } from "../lcd-display/lcd-display.component";
import { ListItem } from "../list-item/list-item.component";
import { Panel } from "../panel/panel.component";
import { RotaryProgress } from "../rotary-progress/rotary-progress.component";
import { SegmentedControl } from "../segmented-control/segmented-control.component";
import { Select } from "../select/select.component";
import { Slider } from "../slider/slider.component";
import { Switch } from "../switch/switch.component";
import { Tabs } from "../tabs/tabs.component";
import { ToggleButton } from "../toggle-button/toggle-button.component";
import { categories, programs, scales, type Category } from "./programs.fixture";

const meta = { title: "Atoms/Overview" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const grid = css({
  display: "grid",
  gridTemplateColumns: "300px 360px",
  gap: "5",
  alignItems: "start",
});
const section = css({ display: "flex", flexDirection: "column", gap: "2" });
const row = css({ display: "flex", gap: "3", alignItems: "center" });

/** Atoms only, laid out roughly like the desktop wireframe's side panels. */
export const Faceplate: Story = {
  render: function Render() {
    const [category, setCategory] = useState<Category>("L");
    const [program, setProgram] = useState(programs.L[0]);
    const [scale, setScale] = useState("ION");
    const [arp, setArp] = useState(true);
    const [length, setLength] = useState("8");
    const [rec, setRec] = useState(false);
    const [play, setPlay] = useState(true);
    const [volume, setVolume] = useState(0.7);
    const [bpm, setBpm] = useState(120);
    return (
      <div className={grid}>
        <Panel className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
          <div className={row}>
            <LcdDisplay value={program.code} label={`Program ${program.code}`} />
            <span className={css({ fontWeight: "700" })}>{program.name}</span>
          </div>
          <Tabs label="Program category" items={categories} value={category} onValueChange={setCategory} panelMaxHeight="180px">
            <div role="listbox" aria-label="Programs">
              {programs[category].map((p) => (
                <ListItem key={p.code} code={p.code} selected={p.code === program.code} onSelect={() => setProgram(p)}>
                  {p.name}
                </ListItem>
              ))}
            </div>
          </Tabs>
          <Select label="Scale" options={scales} value={scale} onValueChange={setScale} />
          <div className={section}>
            <Label as="span">Gate arp</Label>
            <Switch checked={arp} onCheckedChange={setArp} label={arp ? "On · G.28" : "Off"} />
          </div>
        </Panel>

        <Panel className={css({ display: "flex", flexDirection: "column", gap: "5" })}>
          <div className={section}>
            <Label as="span">Tempo</Label>
            <div className={row}>
              <Button aria-label="Slower" onClick={() => setBpm((b) => b - 1)}>−</Button>
              <LcdDisplay value={String(bpm)} digits={3} label={`${bpm} BPM`} />
              <Button aria-label="Faster" onClick={() => setBpm((b) => b + 1)}>+</Button>
              <Button tone="dark" size="lg" className={css({ flex: "1" })}>TAP</Button>
            </div>
          </div>
          <div className={section}>
            <Label as="span">Loop length (beats)</Label>
            <SegmentedControl
              label="Loop length"
              options={["1/16", "1/8", "1/4", "1/2", "1", "2", "4", "8"].map((v) => ({ value: v, label: v }))}
              value={length}
              onValueChange={setLength}
            />
          </div>
          <div className={section}>
            <Label as="span">Transport</Label>
            <div className={row}>
              <ToggleButton size="lg" led="red" pulse pressed={rec} onPressedChange={setRec}>REC</ToggleButton>
              <ToggleButton size="lg" led="green" pressed={play} onPressedChange={setPlay}>PLAY</ToggleButton>
              <HoldButton size="lg" onHoldStart={() => {}} onHoldEnd={() => {}}>ERASE</HoldButton>
            </div>
          </div>
          <div className={row}>
            <RotaryProgress value={0.72} color={rec ? "red" : "green"} label="Loop position">6/8</RotaryProgress>
            <div className={css({ flex: "1" })}>
              <Slider label="Layer volume" showLabel value={volume} onValueChange={setVolume} />
            </div>
          </div>
          <div className={row}>
            <Button>✓ Keep</Button>
            <Button>↶ Discard</Button>
            <Button tone="orange">Clear all</Button>
          </div>
        </Panel>
      </div>
    );
  },
};
