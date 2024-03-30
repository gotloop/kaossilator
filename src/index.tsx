import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Kaossillator } from "./app/components/Kaossillator";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <div>
      <Kaossillator />
    </div>
  </React.StrictMode>,
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://vitejs.dev/guide/api-hmr.html#required-conditional-guard
if (import.meta.hot) {
  import.meta.hot.accept();
}
