import React from "react";
import { css, cva, cx } from "../../../../styled-system/css";

const track = css({
  position: "relative",
  height: "10px",
  borderRadius: "5px",
  bg: "surface.deep",
  boxShadow: "wellDark",
  overflow: "hidden",
});

const fill = cva({
  base: {
    position: "absolute",
    insetBlock: "2px",
    left: "2px",
    borderRadius: "3px",
    transition: "width 80ms linear",
  },
  variants: {
    color: {
      yellow: { bg: "accent.yellow", boxShadow: "0 0 6px {colors.accent.yellow}" },
      cyan: { bg: "accent.cyan", boxShadow: "0 0 6px {colors.accent.cyan}" },
      orange: { bg: "accent.orange", boxShadow: "0 0 6px {colors.accent.orange}" },
      red: { bg: "led.red", boxShadow: "0 0 6px {colors.led.red}" },
      green: { bg: "led.green", boxShadow: "0 0 6px {colors.led.green}" },
    },
  },
  defaultVariants: { color: "green" },
});

export interface ProgressBarProps {
  /** Progress from 0 to 1. */
  value: number;
  color?: "yellow" | "cyan" | "orange" | "red" | "green";
  label: string;
  valueText?: string;
  className?: string;
}

/** A recessed bar that fills left to right: loop position on mobile. */
export const ProgressBar: React.FC<ProgressBarProps> = ({ value, color, label, valueText, className }) => {
  const clamped = Math.min(Math.max(value, 0), 1);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
      aria-valuetext={valueText}
      className={cx(track, className)}
    >
      <div className={fill({ color })} style={{ width: `calc(${clamped * 100}% - 4px)` }} />
    </div>
  );
};
