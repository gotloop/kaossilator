import "@testing-library/jest-dom/vitest";

export * from "@testing-library/react";

// jsdom has no ResizeObserver.
globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
