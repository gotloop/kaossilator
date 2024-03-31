import React from "react";
import { useAtom } from "jotai";

import { waveForms } from "../../core/constants";
import { waveFormAtom } from "../../core/state";
import "./WaveButtons.css";

export const WaveButtons: React.FC = () => {
  const [, setWaveForm] = useAtom(waveFormAtom);
  return (
    <div className="rnd-container" id="wave">
      {waveForms.map((waveForm) => (
        <button
          type="button"
          className="btn rnd btn-square"
          key={waveForm.name}
          title={waveForm.name}
          onClick={() => setWaveForm(waveForm.name)}
        >
          <svg id="square" viewBox="-2 -2 12 10">
            <path d={waveForm.iconPath} />
          </svg>
        </button>
      ))}
    </div>
  );
};
