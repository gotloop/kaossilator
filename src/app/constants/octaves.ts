//data constants

//octave correspondance
//see https://en.wikipedia.org/wiki/Audio_frequency
export const octaves = {
  "-1": 8.18, //C-1 :Lowest organ note 	N/A (fundamental frequency inaudible)
  "0": 16.35, //C0 : Lowest note for tuba, large pipe organs, Bösendorfer Imperial Grand Piano 	N/A (fundamental frequency inaudible)
  "1": 32.7, //C1 : Lowest C on a standard 88-key piano.
  "2": 65.41, //C2 : Lowest note for cello
  "3": 130.81, //C3 : Lowest note for viola, mandola
  "4": 261.63, //C4 : Middle C
  "5": 523.25, //C5 : C in middle of treble clef
  "6": 1046.5, //C6 : Approximately the highest note reproducible by the average female human voice.
  "7": 2093, //C7 : Highest note for a flute.
  "8": 4186, //C8 : Highest note on a standard 88-key piano.
  "9": 8372, //C9 :
  "10": 16744, //C10 : Approximately the tone that a typical CRT television emits while running.
};
//Arbitrary starting notes
export const notes = {
  C: 0,
  "C#": 1,
  D: 2,
  "D#": 3,
  E: 4,
  F: 5,
  "F#": 6,
  G: 7,
  "G#": 8,
  A: 9,
  "A#": 10,
  B: 11,
};
//scales, number of semitones from the tonic.
// https://en.wikipedia.org/wiki/Diatonic_scale
export const scales = {
  ionian: [0, 2, 4, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
};
//svg icon path for the wave form.
export const oscillatorTypes = [
  {
    name: "sine",
    iconPath: "M 0,4 C 0,4 0,1 2,1 4,1 4,7 6,7 8,7 8,4 8,4",
  },
  {
    name: "square",
    iconPath: "M 0,1 0,7 4,7 4,1 8,1 8,7",
  },
  {
    name: "triangle",
    iconPath: "M 0,4 2,8 6,0 8,4",
  },
];
