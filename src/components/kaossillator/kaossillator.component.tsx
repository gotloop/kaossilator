import React from "react";
import { useAtomsDevtools } from "jotai-devtools";

import "./kaossillator.component.css";
import { SettingsForm } from "../settings-form/settings-form.component";
import { TouchPad } from "../touchpad/touchpad.component";

export const Kaossillator: React.FC = () => {
  useAtomsDevtools("Kaossillator");
  return (
    <div id="kaoss">
      <h1 className="sr-only">Kaossilator</h1>
      <div className="metal">
        <div id="lcd">{}</div>
        <SettingsForm />
        <TouchPad />
      </div>
    </div>
  );
};
