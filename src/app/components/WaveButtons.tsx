import React from "react";

import { waveForms } from "../../core/constants";
import "./WaveButtons.css";

export const WaveButtons: React.FC = () => {
  return (
    <div className="rnd-container" id="wave">
      {waveForms.map((waveForm) => (
        <button className="btn rnd btn-square" key={waveForm.name}>
          <svg id="square" viewBox="-1 -1 10 10">
            <path d={waveForm.iconPath} />
          </svg>
        </button>
      ))}
    </div>
  );
};
