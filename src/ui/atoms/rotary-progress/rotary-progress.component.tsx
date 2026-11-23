import React from "react";
import { css, cva, cx } from "../../../../styled-system/css";

const root = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: "full",
  // Brushed aluminium bezel, like the Braun TP1 / T1000 dials.
  background:
    "conic-gradient(from 20deg, #f4f4f1, #c9c9c4, #f4f4f1, #bdbdb8, #f4f4f1, #d2d2cd, #f4f4f1)",
  boxShadow: "0 2px 4px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.9)",
});

const svg = css({ position: "absolute", inset: "0", transform: "rotate(-90deg)" });

const progress = cva({
  base: { fill: "none", strokeLinecap: "butt", transition: "stroke-dashoffset 80ms linear" },
  variants: {
    color: {
      yellow: { stroke: "accent.yellow" },
      cyan: { stroke: "accent.cyan" },
      orange: { stroke: "accent.orange" },
      red: { stroke: "led.red" },
      green: { stroke: "led.green" },
    },
  },
  defaultVariants: { color: "green" },
});

const center = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "full",
  bg: "surface.deep",
  color: "fg.onDark",
  fontFamily: "lcd",
  fontWeight: "600",
  boxShadow: "wellDark",
});

export interface RotaryProgressProps {
  /** Progress from 0 to 1. */
  value: number;
  color?: "yellow" | "cyan" | "orange" | "red" | "green";
  /** Diameter in px. */
  size?: number;
  /** Content of the centre (e.g. "6/8"). */
  children?: React.ReactNode;
  /** Accessible name, e.g. "Loop position". */
  label: string;
  /** Accessible value text, e.g. "beat 6 of 8". */
  valueText?: string;
  className?: string;
}

/** A ring that fills clockwise: the loop position. */
export const RotaryProgress: React.FC<RotaryProgressProps> = ({
  value,
  color,
  size = 72,
  children,
  label,
  valueText,
  className,
}) => {
  const clamped = Math.min(Math.max(value, 0), 1);
  const stroke = size * 0.11;
  const radius = size / 2 - stroke / 2 - size * 0.06;
  const circumference = 2 * Math.PI * radius;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
      aria-valuetext={valueText}
      className={cx(root, className)}
      style={{ width: size, height: size }}
    >
      <svg className={svg} width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#121211" strokeWidth={stroke} />
        <circle
          className={progress({ color })}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clamped)}
        />
      </svg>
      <div
        className={center}
        style={{ width: size * 0.56, height: size * 0.56, fontSize: size * 0.17 }}
      >
        {children}
      </div>
    </div>
  );
};
