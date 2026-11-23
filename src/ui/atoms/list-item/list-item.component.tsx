import React from "react";
import { cva, cx } from "../../../../styled-system/css";

const item = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
    width: "100%",
    minHeight: "8",
    px: "3",
    textAlign: "left",
    fontSize: "13px",
    cursor: "pointer",
    userSelect: "none",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    transition: "background 80ms",
    _focusVisible: {
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: "focus",
      outlineOffset: "-2px",
    },
    _disabled: { opacity: 0.45, cursor: "not-allowed" },
  },
  variants: {
    tone: {
      light: {
        color: "fg",
        borderBottomColor: "aluminium.200",
        _hover: { bg: "cardCyan.200" },
        // Selected row looks like a yellow row of the reference card.
        _selected: { bg: "accent.yellow", color: "aluminium.950", fontWeight: "700" },
      },
      dark: {
        color: "fg.onDark",
        borderBottomColor: "aluminium.800",
        _hover: { bg: "aluminium.800" },
        _selected: { bg: "accent.yellow", color: "aluminium.950", fontWeight: "700" },
      },
    },
  },
  defaultVariants: { tone: "light" },
});

const code = cva({
  base: {
    fontFamily: "lcd",
    fontSize: "12px",
    letterSpacing: "0.06em",
    minWidth: "3.2em",
  },
  variants: {
    tone: {
      light: { color: "fg.muted" },
      dark: { color: "lcd.on" },
    },
  },
  defaultVariants: { tone: "light" },
});

export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  selected?: boolean;
  disabled?: boolean;
  /** Short code shown first, e.g. the program number "L.00". */
  code?: string;
  tone?: "light" | "dark";
  onSelect?: () => void;
}

/** A selectable row (role="option"), e.g. one program in the program list. */
export const ListItem: React.FC<ListItemProps> = ({
  selected = false,
  disabled = false,
  code: codeText,
  tone,
  onSelect,
  className,
  children,
  ...props
}) => (
  <div
    role="option"
    aria-selected={selected}
    aria-disabled={disabled || undefined}
    tabIndex={selected ? 0 : -1}
    className={cx(item({ tone }), className)}
    onClick={() => !disabled && onSelect?.()}
    onKeyDown={(e) => {
      if (!disabled && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onSelect?.();
      }
    }}
    {...props}
  >
    {codeText && <span className={code({ tone })}>{codeText}</span>}
    <span>{children}</span>
  </div>
);
