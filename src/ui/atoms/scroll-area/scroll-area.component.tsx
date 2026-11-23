import React from "react";
import { cva, cx } from "../../../../styled-system/css";

const scrollArea = cva({
  base: {
    overflowY: "auto",
    overflowX: "hidden",
    overscrollBehavior: "contain",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": { width: "10px" },
    "&::-webkit-scrollbar-track": { borderRadius: "5px" },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "transparent",
      backgroundClip: "padding-box",
    },
    _focusVisible: {
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: "focus",
      outlineOffset: "-2px",
    },
  },
  variants: {
    tone: {
      // Recessed in the aluminium panel.
      light: {
        bg: "surface.raised",
        boxShadow: "well",
        scrollbarColor: "{colors.aluminium.400} transparent",
        "&::-webkit-scrollbar-thumb": { bg: "aluminium.400" },
      },
      // Black window, like the T1000 dial section.
      dark: {
        bg: "surface.deep",
        color: "fg.onDark",
        boxShadow: "wellDark",
        scrollbarColor: "{colors.aluminium.600} transparent",
        "&::-webkit-scrollbar-thumb": { bg: "aluminium.600" },
      },
      none: {},
    },
  },
  defaultVariants: { tone: "light" },
});

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark" | "none";
  /** CSS max-height of the scrollable area (e.g. "240px", "40vh"). */
  maxHeight?: string;
}

/** A vertically scrolling, recessed area with slim themed scrollbars. */
export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ tone, maxHeight, className, style, tabIndex = 0, ...props }, ref) => (
    <div
      ref={ref}
      tabIndex={tabIndex}
      className={cx(scrollArea({ tone }), className)}
      style={{ maxHeight, ...style }}
      {...props}
    />
  ),
);
ScrollArea.displayName = "ScrollArea";
