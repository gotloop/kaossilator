import { atom } from "jotai";
import { ScaleType, WaveFormType } from "./constants";

/* beats per minute, for loop size */
const bpmAtom = atom(120);

/* wave form type */
const waveFormAtom = atom<WaveFormType>("sine");

/* scales */
const selectedScaleAtom = atom<ScaleType>("none");

const tonicAtom = atom("C");

/* is playing: true when touchpad is touched */
const isPlayingAtom = atom(false);

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

const touchpadSizeAtom = atom<Size>({ width: 0, height: 0 });

const currentPositionAtom = atom<Position>({ x: 0, y: 0 });

const frequencyAtom = atom(0);

const currentOffsetAtom = atom(0);

const currentPitchAtom = atom(0);

const volumeAtom = atom(0);

const octaveAtom = atom(2);
 
const currentScaleAtom = atom("ionian");

export {
  bpmAtom,
  waveFormAtom,
  selectedScaleAtom,
  isPlayingAtom,
  touchpadSizeAtom,
  currentPositionAtom,
  frequencyAtom,
  currentOffsetAtom,
  currentPitchAtom,
  volumeAtom,
  octaveAtom,
  tonicAtom,
  currentScaleAtom,
};

