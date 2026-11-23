import React from "react";
import { cva, cx } from "../../../../styled-system/css";

const panel = cva({
  base: {
    position: "relative",
    borderRadius: "panel",
    p: "4",
  },
  variants: {
    tone: {
      // Light aluminium faceplate with a faint brushed texture.
      light: {
        bg: "surface.panel",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0px, rgba(255,255,255,0) 1px, rgba(0,0,0,.015) 2px, rgba(255,255,255,0) 3px)",
        boxShadow: "panel",
        color: "fg",
      },
      // Black faceplate, like the T1000 dial section.
      dark: {
        bg: "surface.deep",
        color: "fg.onDark",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.08), 0 1px 2px rgba(0,0,0,.3), 0 8px 24px rgba(0,0,0,.2)",
      },
      // A section recessed into a panel.
      inset: {
        bg: "surface.well",
        boxShadow: "well",
        color: "fg",
      },
    },
  },
  defaultVariants: { tone: "light" },
});

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark" | "inset";
}

/** A faceplate surface that groups controls. */
export const Panel: React.FC<PanelProps> = ({ tone, className, ...props }) => (
  <div className={cx(panel({ tone }), className)} {...props} />
);
