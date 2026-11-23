import React from "react";
import { cva, cx } from "../../../../styled-system/css";
import { keyDark, keyLight, keyOrange } from "../shared/key.styles";

export const buttonStyle = cva({
  base: keyLight,
  variants: {
    tone: {
      light: {},
      dark: keyDark,
      orange: keyOrange,
    },
    size: {
      sm: { height: "7", minWidth: "7", px: "2", fontSize: "11px" },
      md: { height: "9", minWidth: "9", px: "3.5", fontSize: "13px" },
      lg: { height: "12", minWidth: "12", px: "5", fontSize: "15px" },
    },
    shape: {
      rect: {},
      // Round keys like the Braun T1000 side buttons / mobile transport.
      round: { borderRadius: "full", px: "0", aspectRatio: "1" },
    },
  },
  defaultVariants: { tone: "light", size: "md", shape: "rect" },
});

export type ButtonTone = "light" | "dark" | "orange";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: ButtonTone;
  size?: ButtonSize;
  shape?: "rect" | "round";
}

/** A plastic key that visibly travels down when pressed. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ tone, size, shape, className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cx(buttonStyle({ tone, size, shape }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
