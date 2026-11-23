import React from "react";
import { css, cx } from "../../../../styled-system/css";
import { buttonStyle, type ButtonSize, type ButtonTone } from "../button/button.component";
import { Led, type LedColor } from "../led/led.component";
import { keyLatched } from "../shared/key.styles";

const latched = css({
  _pressed: keyLatched,
});

const darkLatched = css({
  _pressed: {
    transform: "translateY(1px)",
    boxShadow: "keyDarkPushed",
    background: "linear-gradient(180deg, #1f1f1e 0%, #191918 100%)",
  },
});

export interface ToggleButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  tone?: Exclude<ButtonTone, "orange">;
  size?: ButtonSize;
  shape?: "rect" | "round";
  /** Colour of the LED in the key; omit for no LED. */
  led?: LedColor;
  /** Blink the LED while on (e.g. recording). */
  pulse?: boolean;
}

/**
 * A latching key: it stays down while on, and its LED lights up.
 * Used for M / S, REC, Play, gate-arp style toggles.
 */
export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    { pressed, onPressedChange, tone = "light", size, shape, led, pulse, className, children, onClick, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      type="button"
      aria-pressed={pressed}
      className={cx(
        buttonStyle({ tone, size, shape }),
        tone === "dark" ? darkLatched : latched,
        className,
      )}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) onPressedChange(!pressed);
      }}
      {...props}
    >
      {led && <Led color={led} on={pressed} pulse={pulse} size="sm" />}
      {children}
    </button>
  ),
);
ToggleButton.displayName = "ToggleButton";
