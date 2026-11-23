import React from "react";
import { cva, cx } from "../../../../styled-system/css";
import { engraved } from "../shared/key.styles";

const label = cva({
  base: engraved,
  variants: {
    tone: {
      light: { color: "fg.muted" },
      dark: { color: "fg.onDarkMuted" },
    },
  },
  defaultVariants: { tone: "light" },
});

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  tone?: "light" | "dark";
  /** Render as a <span> when it doesn't label a form control. */
  as?: "label" | "span";
}

/** Small uppercase label "printed" on the panel (TEMPO, LOOP LENGTH…). */
export const Label: React.FC<LabelProps> = ({ tone, as = "label", className, ...props }) => {
  const Tag = as;
  return <Tag className={cx(label({ tone }), className)} {...props} />;
};
