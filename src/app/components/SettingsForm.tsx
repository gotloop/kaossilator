import React from "react";
import { useAtom } from "jotai";

import "./SettingsForm.css";
import {
  currentScaleAtom,
  octaveAtom,
  tonicAtom,
  waveFormAtom,
} from "../../core/state";
import { WaveFormType, notes, scales } from "../../core/constants";
import { Selector } from "./Selector";

export const SettingsForm: React.FC = () => {
  const [tonic, setTonic] = useAtom(tonicAtom);
  const [currentScale, setCurrentScale] = useAtom(currentScaleAtom);
  const [octave, setOctave] = useAtom(octaveAtom);
  const [waveForm, setWaveForm] = useAtom(waveFormAtom);
  return (
    <form id="options" name="settings" className="settings">
      <Selector
        id="type"
        name="Type"
        value={waveForm}
        options={["sine", "square", "triangle"].map((wave) => ({
          label: wave,
          value: wave,
        }))}
        change={(e) => setWaveForm(e.target.value as WaveFormType)}
      ></Selector>
      <Selector
        id="octave"
        name="Octave"
        value={String(octave)}
        options={[0, 1, 2, 3, 4, 5, 6].map((octave) => ({
          label: octave.toString(),
          value: octave.toString(),
        }))}
        change={(e) => setOctave(parseInt(e.target.value))}
      ></Selector>
      <Selector
        id="tonic"
        name="Tonic"
        value={tonic}
        options={notes.map((scale) => ({ label: scale, value: scale }))}
        change={(e) => setTonic(e.target.value)}
      ></Selector>
      <Selector
        id="scale"
        name="Scale"
        value={currentScale}
        options={scales.map((scale) => ({ label: scale, value: scale }))}
        change={(e) => setCurrentScale(e.target.value)}
      ></Selector>
    </form>
  );
};
