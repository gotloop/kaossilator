import React from "react";

import "./Kaossillator.css";
import { WaveButtons } from "./WaveButtons";
import { SettingsForm } from "./SettingsForm";
import { TouchPad } from "./TouchPad";

export const Kaossillator: React.FC = () => {
  return (
    <div id="kaoss">
      <h1 className="sr-only">Kaossilator</h1>
      <div className="metal">
        <WaveButtons />
        <div id="lcd">{}</div>
        <SettingsForm />
        <TouchPad />
      </div>
    </div>
  );
};
