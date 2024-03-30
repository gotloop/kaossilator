import React from "react";
import { WaveButtons } from "./WaveButtons";
import { SettingsForm } from "./SettingsForm";
import { TouchPad } from "./TouchPad";

import "./Metal.css";

export const Metal: React.FC = () => {
  return (
    <div className="metal">
      <WaveButtons></WaveButtons>
      <div id="lcd">{}</div>
      <SettingsForm>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select id="type">
            <option value="sine">sine</option>
            <option value="square">square</option>
            <option value="triangle">triangle</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tonic">Tonic</label>
          <select id="tonic">
            <option value="C">C</option>
            <option value="C#">C#</option>
            <option value="D">D</option>
            <option value="D#">D#</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="F#">F#</option>
            <option value="G">G</option>
            <option value="G#">G#</option>
            <option value="A">A</option>
            <option value="A#">A#</option>
            <option value="B">B</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="octave">Octave</label>
          <select id="octave">
            <option value={-1}>-1</option>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mode">Mode</label>
          <select id="mode">
            <option value="none">none</option>
            <option value="semitone">semitone</option>
            <option value="ionian">ionian</option>
            <option value="dorian">dorian</option>
            <option value="phrygian">phrygian</option>
            <option value="lydian">lydian</option>
            <option value="mixolydian">mixolydian</option>
            <option value="aeolian">aeolian</option>
            <option value="locrian">locrian</option>
          </select>
        </div>
      </SettingsForm>
      <TouchPad />
    </div>
  );
};

