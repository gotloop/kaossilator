import React from "react";
import { cva, cx, css } from "../../../../styled-system/css";

const glass = cva({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    px: "2.5",
    borderRadius: "4px",
    bg: "lcd.glass",
    boxShadow: "wellDark",
    fontFamily: "lcd",
    fontStyle: "italic",
    letterSpacing: "0.12em",
    lineHeight: "1",
    whiteSpace: "pre",
    fontVariantNumeric: "tabular-nums",
    // Subtle glass reflection.
    _after: {
      content: '""',
      position: "absolute",
      inset: "0",
      borderRadius: "inherit",
      background: "linear-gradient(170deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,0) 40%)",
      pointerEvents: "none",
    },
  },
  variants: {
    size: {
      sm: { height: "7", fontSize: "16px" },
      md: { height: "10", fontSize: "24px" },
      lg: { height: "14", fontSize: "36px" },
    },
  },
  defaultVariants: { size: "md" },
});

// Unlit segments behind the text, like a real 7-segment display.
const ghost = css({ position: "absolute", right: "2.5", color: "lcd.off", userSelect: "none" });
const lit = css({
  position: "relative",
  color: "lcd.on",
  textShadow: "0 0 6px rgba(255,59,31,.7), 0 0 1px rgba(255,59,31,.9)",
});

export interface LcdDisplayProps {
  /** Text to show, e.g. "L.00", "G.28", "Ion", "120". */
  value: string;
  /** Number of digit cells (the Kaossilator has 3). Dots don't take a cell. */
  digits?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Accessible text, if it differs from `value` (e.g. "Program L.00"). */
  label?: string;
}

/** The red 7-segment display of the Kaossilator. */
export const LcdDisplay: React.FC<LcdDisplayProps> = ({
  value,
  digits = 3,
  size,
  className,
  label,
}) => {
  // Pad to the number of digit cells ("." doesn't count as a digit), then
  // build the unlit layer from the same string so both line up in the
  // monospace font: every character becomes an "8", dots stay dots.
  const dots = value.length - value.replace(/\./g, "").length;
  const text = value.padStart(Math.max(digits, value.length - dots) + dots, " ");
  const unlit = text.replace(/[^.]/g, "8");
  return (
    <span
      className={cx(glass({ size }), className)}
      role="img"
      aria-label={label ?? value}
    >
      <span className={ghost} aria-hidden>
        {unlit}
      </span>
      <span className={lit} aria-hidden>
        {text}
      </span>
    </span>
  );
};
