import React from "react";
import { css, cx } from "../../../../styled-system/css";

const kbd = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "5",
  height: "5",
  px: "1",
  borderRadius: "3px",
  fontFamily: "body",
  fontSize: "10px",
  fontWeight: "700",
  color: "fg.muted",
  background: "linear-gradient(180deg, #fbfbf9 0%, #e6e6e2 100%)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border",
  boxShadow: "0 1px 0 #a9a9a4",
});

/** A keyboard shortcut hint, drawn as a tiny key cap. */
export const Kbd: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <kbd className={cx(kbd, className)} {...props} />
);
