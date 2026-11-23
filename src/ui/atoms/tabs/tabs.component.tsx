import React, { useId, useRef } from "react";
import { css, cx } from "../../../../styled-system/css";
import { keyLatched, keyLight, well } from "../shared/key.styles";
import { focusValue, nextRovingValue } from "../shared/roving-focus";
import { ScrollArea } from "../scroll-area/scroll-area.component";

const root = css({ display: "flex", flexDirection: "column", gap: "2" });

const tabList = css(well, { display: "flex" });

const tab = css(keyLight, {
  flex: "1 1 0",
  minWidth: "0",
  height: "9",
  px: "2",
  fontSize: "13px",
  // The selected tab is latched down with a yellow top strip, like the
  // header band of the Kaossilator reference cards.
  "&[aria-selected=true]": {
    ...keyLatched,
    _before: {
      content: '""',
      position: "absolute",
      top: "4px",
      left: "18%",
      right: "18%",
      height: "3px",
      borderRadius: "2px",
      bg: "accent.yellow",
      boxShadow: "0 0 6px 1px {colors.accent.yellow}",
    },
  },
});

export interface TabItem<T extends string> {
  value: T;
  label: React.ReactNode;
  /** Tooltip / accessible name, e.g. "Lead" for the "L" tab. */
  title?: string;
}

export interface TabsProps<T extends string> {
  items: readonly TabItem<T>[];
  value: T;
  onValueChange: (value: T) => void;
  /** Accessible name of the tab list. */
  label: string;
  /** Content of the active tab's panel. */
  children: React.ReactNode;
  /** Max height of the scrollable panel (CSS value). */
  panelMaxHeight?: string;
  panelTone?: "light" | "dark";
  className?: string;
}

/**
 * Key-style tabs over a scrollable panel. Used for the program categories
 * (L a b c S d P) above the program list.
 */
export function Tabs<T extends string>({
  items,
  value,
  onValueChange,
  label,
  children,
  panelMaxHeight = "240px",
  panelTone = "light",
  className,
}: TabsProps<T>) {
  const id = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const values = items.map((i) => i.value);
  const tabId = (v: string) => `${id}-tab-${v}`;
  const panelId = `${id}-panel`;

  const onKeyDown = (event: React.KeyboardEvent) => {
    const next = nextRovingValue(event, values, value);
    if (next === undefined) return;
    event.preventDefault();
    onValueChange(next);
    focusValue(listRef.current, next);
  };

  return (
    <div className={cx(root, className)}>
      <div ref={listRef} role="tablist" aria-label={label} className={tabList}>
        {items.map((item) => {
          const selected = item.value === value;
          return (
            <button
              key={item.value}
              id={tabId(item.value)}
              type="button"
              role="tab"
              title={item.title}
              aria-selected={selected}
              aria-controls={panelId}
              data-value={item.value}
              tabIndex={selected ? 0 : -1}
              className={tab}
              onClick={() => onValueChange(item.value)}
              onKeyDown={onKeyDown}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <ScrollArea
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId(value)}
        tone={panelTone}
        maxHeight={panelMaxHeight}
        className={css({ borderRadius: "key" })}
      >
        {children}
      </ScrollArea>
    </div>
  );
}
