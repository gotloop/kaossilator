import React from "react";
import { cva, cx } from "../../../../styled-system/css";

const badge = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    height: "5",
    px: "1.5",
    borderRadius: "3px",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  variants: {
    tone: {
      neutral: { bg: "aluminium.200", color: "fg.muted", boxShadow: "inset 0 0 0 1px {colors.aluminium.300}" },
      yellow: { bg: "accent.yellow", color: "aluminium.950" },
      cyan: { bg: "accent.cyan", color: "aluminium.950" },
      orange: { bg: "accent.orange", color: "white" },
      dark: { bg: "surface.deep", color: "fg.onDark" },
    },
  },
  defaultVariants: { tone: "neutral" },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "yellow" | "cyan" | "orange" | "dark";
}

/** A small printed tag: UNSAVED, 3 LAYERS, SWING… */
export const Badge: React.FC<BadgeProps> = ({ tone, className, ...props }) => (
  <span className={cx(badge({ tone }), className)} {...props} />
);
