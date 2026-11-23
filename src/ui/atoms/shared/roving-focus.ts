import type { KeyboardEvent } from "react";

/**
 * Arrow-key navigation for a group where exactly one item is selected
 * (radiogroup, tablist). Selection follows focus, as in native radio groups.
 *
 * Returns the next value, or `undefined` if the key isn't a navigation key.
 */
export function nextRovingValue<T>(
  event: KeyboardEvent,
  values: readonly T[],
  current: T,
  orientation: "horizontal" | "vertical" = "horizontal",
): T | undefined {
  const index = values.indexOf(current);
  const prevKeys =
    orientation === "horizontal" ? ["ArrowLeft", "ArrowUp"] : ["ArrowUp", "ArrowLeft"];
  const nextKeys =
    orientation === "horizontal" ? ["ArrowRight", "ArrowDown"] : ["ArrowDown", "ArrowRight"];

  if (prevKeys.includes(event.key)) return values[(index - 1 + values.length) % values.length];
  if (nextKeys.includes(event.key)) return values[(index + 1) % values.length];
  if (event.key === "Home") return values[0];
  if (event.key === "End") return values[values.length - 1];
  return undefined;
}

/** Focus the element of a group that carries `data-value={value}`. */
export function focusValue(container: HTMLElement | null, value: string) {
  container
    ?.querySelector<HTMLElement>(`[data-value="${CSS.escape(value)}"]`)
    ?.focus();
}
