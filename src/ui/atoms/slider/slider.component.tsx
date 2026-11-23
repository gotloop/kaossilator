import React, { useId } from "react";
import { css, cx } from "../../../../styled-system/css";
import { engraved } from "../shared/key.styles";

const root = css({ display: "flex", alignItems: "center", gap: "3" });

// The cap is modelled on the grey slider of the Braun TP1 (doc/BigImage.png):
// a narrow recessed slot with a small wedge-shaped plastic cap.
const thumb = {
  width: "16px",
  height: "24px",
  borderRadius: "3px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "aluminium.500",
  background:
    "linear-gradient(90deg, #bdbdb8 0%, #e9e9e5 30%, #f7f7f4 50%, #e9e9e5 70%, #b8b8b3 100%)",
  boxShadow: "0 2px 3px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.8)",
  cursor: "grab",
} as const;

const range = css({
  appearance: "none",
  flex: "1",
  minWidth: "80px",
  height: "24px",
  bg: "transparent",
  cursor: "pointer",
  "&::-webkit-slider-runnable-track": {
    height: "6px",
    borderRadius: "3px",
    bg: "surface.deep",
    boxShadow: "wellDark",
  },
  "&::-moz-range-track": {
    height: "6px",
    borderRadius: "3px",
    bg: "surface.deep",
    boxShadow: "wellDark",
  },
  "&::-webkit-slider-thumb": { ...thumb, appearance: "none", marginTop: "-9px" },
  "&::-moz-range-thumb": thumb,
  "&:active::-webkit-slider-thumb": { cursor: "grabbing" },
  _focusVisible: {
    outline: "none",
    "&::-webkit-slider-thumb": { outlineWidth: "2px", outlineStyle: "solid", outlineColor: "focus", outlineOffset: "2px" },
    "&::-moz-range-thumb": { outlineWidth: "2px", outlineStyle: "solid", outlineColor: "focus", outlineOffset: "2px" },
  },
  _disabled: { opacity: 0.5, cursor: "not-allowed" },
});

const readout = css({
  fontFamily: "lcd",
  fontSize: "12px",
  color: "fg.muted",
  minWidth: "4.5em",
  textAlign: "right",
  fontVariantNumeric: "tabular-nums",
});

export interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Accessible name; shown as an engraved label when `showLabel`. */
  label: string;
  showLabel?: boolean;
  /** Formats the readout next to the slider; omit to hide the readout. */
  format?: (value: number) => string;
  disabled?: boolean;
  className?: string;
}

/** A horizontal fader (layer volume). Native range input under the hood. */
export const Slider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  min = 0,
  max = 1,
  step = 0.01,
  label,
  showLabel = false,
  format,
  disabled,
  className,
}) => {
  const id = useId();
  return (
    <div className={cx(root, className)}>
      {showLabel && (
        <label htmlFor={id} className={css(engraved)}>
          {label}
        </label>
      )}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        aria-label={showLabel ? undefined : label}
        aria-valuetext={format?.(value)}
        className={range}
        onChange={(e) => onValueChange(Number(e.target.value))}
      />
      {format && <output htmlFor={id} className={readout}>{format(value)}</output>}
    </div>
  );
};
