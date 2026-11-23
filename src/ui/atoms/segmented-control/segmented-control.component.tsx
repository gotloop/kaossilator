import React, { useRef } from "react";
import { css, cva, cx } from "../../../../styled-system/css";
import { keyLatched, keyLight, well } from "../shared/key.styles";
import { focusValue, nextRovingValue } from "../shared/roving-focus";

const group = css(well, { display: "flex" });

const segment = cva({
  base: {
    ...keyLight,
    flex: "1 1 0",
    minWidth: "0",
    px: "1.5",
    fontVariantNumeric: "tabular-nums",
    // The selected key stays down and gets a coloured strip, like a lit
    // Braun selector key.
    "&[aria-checked=true]": {
      ...keyLatched,
      _after: {
        content: '""',
        position: "absolute",
        left: "22%",
        right: "22%",
        bottom: "4px",
        height: "3px",
        borderRadius: "2px",
      },
    },
  },
  variants: {
    size: {
      sm: { height: "7", fontSize: "11px" },
      md: { height: "9", fontSize: "13px" },
    },
    accent: {
      yellow: { "&[aria-checked=true]::after": { bg: "accent.yellow", boxShadow: "0 0 6px 1px {colors.accent.yellow}" } },
      cyan: { "&[aria-checked=true]::after": { bg: "accent.cyan", boxShadow: "0 0 6px 1px {colors.accent.cyan}" } },
      orange: { "&[aria-checked=true]::after": { bg: "accent.orange", boxShadow: "0 0 6px 1px {colors.accent.orange}" } },
    },
  },
  defaultVariants: { size: "md", accent: "yellow" },
});

export interface SegmentOption<T extends string> {
  value: T;
  label: React.ReactNode;
  /** Accessible name when the label isn't plain text. */
  ariaLabel?: string;
}

export interface SegmentedControlProps<T extends string> {
  options: readonly SegmentOption<T>[];
  value: T;
  onValueChange: (value: T) => void;
  /** Accessible name of the whole group (e.g. "Loop length"). */
  label: string;
  size?: "sm" | "md";
  accent?: "yellow" | "cyan" | "orange";
  className?: string;
}

/**
 * A row of keys where exactly one is down: loop length, notes, octave.
 * Behaves like a radio group (arrow keys move the selection).
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onValueChange,
  label,
  size,
  accent,
  className,
}: SegmentedControlProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const values = options.map((o) => o.value);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const next = nextRovingValue(event, values, value);
    if (next === undefined) return;
    event.preventDefault();
    onValueChange(next);
    focusValue(ref.current, next);
  };

  return (
    <div
      ref={ref}
      role="radiogroup"
      aria-label={label}
      className={cx(group, className)}
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={option.ariaLabel}
            data-value={option.value}
            tabIndex={selected ? 0 : -1}
            className={segment({ size, accent })}
            onClick={() => onValueChange(option.value)}
            onKeyDown={onKeyDown}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
