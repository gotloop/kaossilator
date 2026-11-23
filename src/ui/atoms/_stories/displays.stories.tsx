import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { css } from "../../../../styled-system/css";
import { Badge } from "../badge/badge.component";
import { Kbd } from "../kbd/kbd.component";
import { Label } from "../label/label.component";
import { LcdDisplay } from "../lcd-display/lcd-display.component";
import { Led } from "../led/led.component";
import { Panel } from "../panel/panel.component";
import { ProgressBar } from "../progress-bar/progress-bar.component";
import { RotaryProgress } from "../rotary-progress/rotary-progress.component";

const row = css({ display: "flex", gap: "5", alignItems: "center", flexWrap: "wrap" });
const stack = css({ display: "flex", flexDirection: "column", gap: "6" });

const meta = { title: "Atoms/Displays" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

/** A fake 8-beat loop at 120 BPM, for the progress stories. */
function useLoop(beats = 8, bpm = 120) {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loopMs = (beats * 60_000) / bpm;
    const tick = (now: number) => {
      setT(((now - start) % loopMs) / loopMs);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [beats, bpm]);
  return t;
}

export const Lcd: Story = {
  render: () => (
    <div className={row}>
      <LcdDisplay value="L.00" label="Program L.00" />
      <LcdDisplay value="G.28" size="sm" />
      <LcdDisplay value="Ion" digits={3} />
      <LcdDisplay value="120" digits={3} size="lg" />
    </div>
  ),
};

export const Leds: Story = {
  render: () => (
    <div className={row}>
      {(["yellow", "cyan", "orange", "red", "green"] as const).map((c) => (
        <span key={c} className={row}>
          <Led color={c} />
          <Led color={c} on />
        </span>
      ))}
      <Led color="red" on pulse size="lg" label="Recording" />
    </div>
  ),
};

export const LoopPosition: Story = {
  render: function Render() {
    const t = useLoop();
    const beat = Math.floor(t * 8) + 1;
    return (
      <div className={stack}>
        <div className={row}>
          <RotaryProgress value={t} label="Loop position" valueText={`beat ${beat} of 8`}>
            {beat}/8
          </RotaryProgress>
          <RotaryProgress value={t} color="red" size={96} label="Recording position">
            REC
          </RotaryProgress>
          <RotaryProgress value={0.4} color="yellow" size={56} label="Static">
            ·
          </RotaryProgress>
        </div>
        <div className={css({ width: "320px" })}>
          <ProgressBar value={t} label="Loop position" valueText={`beat ${beat} of 8`} />
        </div>
      </div>
    );
  },
};

export const Labels: Story = {
  render: () => (
    <div className={stack}>
      <div className={row}>
        <Label as="span">Tempo</Label>
        <Label as="span">Loop length</Label>
        <Label as="span">Gate arp</Label>
      </div>
      <div className={row}>
        <Badge>3 layers</Badge>
        <Badge tone="orange">Unsaved</Badge>
        <Badge tone="yellow">Swing</Badge>
        <Badge tone="cyan">Scale ○</Badge>
        <Badge tone="dark">c.50</Badge>
      </div>
      <div className={row}>
        <span>
          Record <Kbd>R</Kbd>
        </span>
        <span>
          Tap <Kbd>T</Kbd>
        </span>
        <span>
          Play <Kbd>Space</Kbd>
        </span>
      </div>
    </div>
  ),
};

export const Panels: Story = {
  render: () => (
    <div className={row}>
      <Panel className={css({ width: "220px", height: "120px" })}>
        <Label as="span">Aluminium</Label>
      </Panel>
      <Panel tone="dark" className={css({ width: "220px", height: "120px" })}>
        <Label as="span" tone="dark">
          Black faceplate
        </Label>
      </Panel>
      <Panel tone="inset" className={css({ width: "220px", height: "120px" })}>
        <Label as="span">Inset</Label>
      </Panel>
    </div>
  ),
};
