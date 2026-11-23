import React from "react";
import { cva, cx } from "../../../../styled-system/css";

export type LedColor = "yellow" | "cyan" | "orange" | "red" | "green";

const led = cva({
  base: {
    display: "inline-block",
    flexShrink: 0,
    borderRadius: "full",
    bg: "led.off",
    boxShadow: "inset 0 1px 1px rgba(0,0,0,.6), 0 1px 0 rgba(255,255,255,.5)",
    transition: "background 120ms, box-shadow 120ms",
  },
  variants: {
    size: {
      sm: { width: "6px", height: "6px" },
      md: { width: "8px", height: "8px" },
      lg: { width: "12px", height: "12px" },
    },
    color: {
      yellow: {},
      cyan: {},
      orange: {},
      red: {},
      green: {},
    },
    on: { true: {}, false: {} },
    pulse: { true: { animation: "ledPulse 1s ease-in-out infinite" }, false: {} },
  },
  compoundVariants: [
    { on: true, color: "yellow", css: { bg: "led.yellow", boxShadow: "0 0 6px 1px {colors.led.yellow}, inset 0 -1px 1px rgba(0,0,0,.2)" } },
    { on: true, color: "cyan", css: { bg: "led.cyan", boxShadow: "0 0 6px 1px {colors.led.cyan}, inset 0 -1px 1px rgba(0,0,0,.2)" } },
    { on: true, color: "orange", css: { bg: "led.orange", boxShadow: "0 0 6px 1px {colors.led.orange}, inset 0 -1px 1px rgba(0,0,0,.2)" } },
    { on: true, color: "red", css: { bg: "led.red", boxShadow: "0 0 6px 1px {colors.led.red}, inset 0 -1px 1px rgba(0,0,0,.2)" } },
    { on: true, color: "green", css: { bg: "led.green", boxShadow: "0 0 6px 1px {colors.led.green}, inset 0 -1px 1px rgba(0,0,0,.2)" } },
  ],
  defaultVariants: { size: "md", color: "orange", on: false, pulse: false },
});

export interface LedProps {
  color?: LedColor;
  on?: boolean;
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** If set, the LED is announced; otherwise it's decorative. */
  label?: string;
}

/** A small indicator lamp, like the LOOP STATUS / GATE ARP indicators. */
export const Led: React.FC<LedProps> = ({
  color = "orange",
  on = false,
  pulse = false,
  size = "md",
  className,
  label,
}) => (
  <span
    className={cx(led({ color, on, pulse: on && pulse, size }), className)}
    role={label ? "status" : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
    data-on={on || undefined}
  />
);
