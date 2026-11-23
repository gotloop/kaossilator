import React, { useId } from "react";
import { css, cva, cx } from "../../../../styled-system/css";
import { engraved } from "../shared/key.styles";

const field = css({ display: "flex", flexDirection: "column", gap: "1.5" });

const frame = cva({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    height: "10",
    borderRadius: "key",
    overflow: "hidden",
  },
  variants: {
    tone: {
      // A dark "dial window" with a lit readout, like the Braun T1000 scale.
      dark: { bg: "surface.deep", boxShadow: "wellDark" },
      // A recessed light window.
      light: { bg: "surface.raised", boxShadow: "well" },
    },
  },
  defaultVariants: { tone: "dark" },
});

const select = cva({
  base: {
    appearance: "none",
    flex: "1",
    minWidth: "0",
    height: "100%",
    pl: "3",
    pr: "11",
    bg: "transparent",
    borderWidth: "0",
    fontFamily: "lcd",
    fontSize: "14px",
    letterSpacing: "0.08em",
    cursor: "pointer",
    outline: "none",
    "& option": { fontFamily: "body", letterSpacing: "normal" },
    _disabled: { cursor: "not-allowed", opacity: 0.5 },
  },
  variants: {
    tone: {
      dark: {
        color: "accent.yellow",
        textShadow: "0 0 6px rgba(255,207,62,.45)",
        "& option": { color: "fg.onDark", bg: "surface.deepRaised" },
      },
      light: {
        color: "fg",
        "& option": { color: "fg", bg: "surface.raised" },
      },
    },
  },
  defaultVariants: { tone: "dark" },
});

// The focus ring sits on the frame so it isn't clipped.
const focusRing = css({
  "&:has(select:focus-visible)": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "focus",
    outlineOffset: "2px",
  },
});

// A small grey key at the right end with a chevron.
const knobKey = css({
  position: "absolute",
  top: "4px",
  right: "4px",
  bottom: "4px",
  width: "8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  pointerEvents: "none",
  color: "fg.muted",
  background: "linear-gradient(180deg, #fbfbf9 0%, #e3e3df 100%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,.9), 0 1px 2px rgba(0,0,0,.45)",
  fontSize: "10px",
});

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value"> {
  options: readonly SelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  /** Engraved label above the field. */
  label?: React.ReactNode;
  tone?: "dark" | "light";
}

/**
 * A native <select> dressed as a retro readout window. Native under the
 * hood, so the option list is the platform's (accessible, good on mobile).
 */
export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onValueChange,
  label,
  tone,
  className,
  id,
  ...props
}) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  return (
    <div className={cx(field, className)}>
      {label && (
        <label htmlFor={selectId} className={css(engraved)}>
          {label}
        </label>
      )}
      <div className={cx(frame({ tone }), focusRing)}>
        <select
          id={selectId}
          value={value}
          className={select({ tone })}
          onChange={(e) => onValueChange(e.target.value)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={knobKey} aria-hidden>
          ▼
        </span>
      </div>
    </div>
  );
};
