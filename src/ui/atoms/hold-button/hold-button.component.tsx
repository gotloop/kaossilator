import React, { useRef, useState } from "react";
import { css, cx } from "../../../../styled-system/css";
import { buttonStyle, type ButtonSize, type ButtonTone } from "../button/button.component";

// Keep the key visually pushed for as long as it's held, even if the
// pointer is captured and :active no longer matches.
const held = css({
  "&[data-held]": {
    transform: "translateY(2px)",
    boxShadow: "keyPushed",
  },
});

export interface HoldButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onPointerDown" | "onPointerUp"> {
  onHoldStart: () => void;
  onHoldEnd: () => void;
  tone?: ButtonTone;
  size?: ButtonSize;
  shape?: "rect" | "round";
}

/**
 * A momentary key: active only while pressed (pointer or Space/Enter).
 * Used for Erase. Always ends the hold on pointerup, pointercancel, blur.
 */
export const HoldButton: React.FC<HoldButtonProps> = ({
  onHoldStart,
  onHoldEnd,
  tone,
  size,
  shape,
  className,
  children,
  ...props
}) => {
  const [isHeld, setIsHeld] = useState(false);
  const heldRef = useRef(false);

  const start = () => {
    if (heldRef.current) return;
    heldRef.current = true;
    setIsHeld(true);
    onHoldStart();
  };
  const end = () => {
    if (!heldRef.current) return;
    heldRef.current = false;
    setIsHeld(false);
    onHoldEnd();
  };

  return (
    <button
      type="button"
      aria-pressed={isHeld}
      data-held={isHeld || undefined}
      className={cx(buttonStyle({ tone, size, shape }), held, className)}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        start();
      }}
      onPointerUp={end}
      onPointerCancel={end}
      onLostPointerCapture={end}
      onBlur={end}
      onKeyDown={(e) => {
        if ((e.key === " " || e.key === "Enter") && !e.repeat) {
          e.preventDefault();
          start();
        }
      }}
      onKeyUp={(e) => {
        if (e.key === " " || e.key === "Enter") end();
      }}
      onContextMenu={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </button>
  );
};
