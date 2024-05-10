import React from "react";
import { atomEffect } from "jotai-effect";
import { useAtom } from "jotai";
import { frequencyAtom, volumeAtom, waveFormAtom } from "../../core/state";
// construct the audio graph and synchronize it with the UI

if (typeof AudioContext === "undefined")
  console.error("audio api not supported");

const context = new AudioContext();
const masterGain = context.createGain();
masterGain.connect(context.destination);
masterGain.gain.value = 0.5;
const oscillator = context.createOscillator();
oscillator.connect(masterGain);
oscillator.start();

// effect to synchronize the audio context with the UI
const volumeEffect = atomEffect((get, set) => {
  const volume = get(volumeAtom);
  if (isNaN(volume)) return;
  console.log("volume", volume);
  masterGain.gain.value = volume;
});

const frequencyEffect = atomEffect((get, set) => {
  const frequency = get(frequencyAtom);
  if (isNaN(frequency)) return;
  console.log("frequency", frequency);
  oscillator.frequency.value = frequency;
});

const waveFormEffect = atomEffect((get, set) => {
  const waveForm = get(waveFormAtom);
  oscillator.type = waveForm;
});

// audio graph component
export const AudioGraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  useAtom(volumeEffect);
  useAtom(frequencyEffect);
  useAtom(waveFormEffect);
  return children;
};
