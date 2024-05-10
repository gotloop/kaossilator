import { atom } from "jotai";
import { ScaleType, WaveFormType, scalesIntervals } from "./constants";
import { convertCoordinates } from "./utils";
import { pitch } from "@tonaljs/tonal";

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

/* beats per minute, for loop size */
export const bpmAtom = atom(120);

/* wave form type */
export const waveFormAtom = atom<WaveFormType>("sine");

/* scales */
export const tonicAtom = atom("C");

/* is playing: true when touchpad is touched */
export const isPlayingAtom = atom(false);

export const touchpadSizeAtom = atom<Size>({ width: 320, height: 240 });

export const touchPositionAtom = atom<Position>({ x: 0, y: 0 });

export const volumeAtom = atom((get) => {
  const { width, height } = get(touchpadSizeAtom);
  const { x, y } = get(touchPositionAtom);
  const { volume } = convertCoordinates(x, y, width, height);
  return volume;
});
export const pitchAtom = atom((get) => {
  const { width, height } = get(touchpadSizeAtom);
  if (width === 0 || height === 0) return 0;
  const { x, y } = get(touchPositionAtom);
  const { pitch } = convertCoordinates(x, y, width, height);
  console.log("pitch", pitch);
  return pitch + 1 / 2;
});

export const octaveAtom = atom(2);

export const scaleAtom = atom<ScaleType>("ionian");

export const scaleValuesAtom = atom((get) => {
  const currentScale = get(scaleAtom);
  return scalesIntervals[currentScale];
});

export const offsetAtom = atom((get) => {
  const pitch = get(pitchAtom);
  const scaleValues = get(scaleValuesAtom);
  return Math.floor(pitch * scaleValues.length + 1);
});

export const frequencyAtom = atom((get) => {
  const octave = get(octaveAtom); 
  const pitch = get(pitchAtom);
  const frequency = octave* 440 + pitch ;
  console.log("frequency", frequency)
  return frequency;
});
