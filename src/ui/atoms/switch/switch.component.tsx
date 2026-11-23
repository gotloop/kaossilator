import React, { useId } from "react";
import { css, cx } from "../../../../styled-system/css";
import { engraved } from "../shared/key.styles";

const root = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "2.5",
  cursor: "pointer",
  userSelect: "none",
});

// A Braun-style slide switch: a recessed slot with a plastic cap that
// slides from one side to the other.
const track = css({
  position: "relative",
  width: "46px",
  height: "22px",
  flexShrink: 0,
  borderRadius: "4px",
  bg: "surface.deep",
  boxShadow: "wellDark",
  cursor: "pointer",
  transition: "background 120ms",
  _focusVisible: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "focus",
    outlineOffset: "2px",
  },
  _checked: { bg: "accent.yellow", boxShadow: "inset 0 1px 3px rgba(0,0,0,.45)" },
  _disabled: { opacity: 0.5, cursor: "not-allowed" },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "2px",
    left: "2px",
    width: "22px",
    height: "18px",
    borderRadius: "3px",
    background: "linear-gradient(90deg, #d2d2cd 0%, #f6f6f3 35%, #f6f6f3 65%, #c9c9c4 100%)",
    boxShadow: "0 1px 0 rgba(255,255,255,.6) inset, 0 1px 2px rgba(0,0,0,.5)",
    transition: "transform 120ms ease-out",
  },
  "&[aria-checked=true]::after": {
    transform: "translateX(20px)",
  },
});

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  id?: string;
}

/** An on/off slide switch with an optional engraved label. */
export const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  label,
  disabled,
  className,
  id,
}) => {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  return (
    <span className={cx(root, className)}>
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={track}
        onClick={() => onCheckedChange(!checked)}
      />
      {label && (
        <label htmlFor={switchId} className={css(engraved, { cursor: "pointer" })}>
          {label}
        </label>
      )}
    </span>
  );
};
