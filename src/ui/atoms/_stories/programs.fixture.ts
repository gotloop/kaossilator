/** A few programs from the owner's manual, for stories only. */
export type Category = "L" | "a" | "b" | "c" | "S" | "d" | "P";

export const categories: { value: Category; label: string; title: string }[] = [
  { value: "L", label: "L", title: "Lead" },
  { value: "a", label: "a", title: "Acoustic" },
  { value: "b", label: "b", title: "Bass" },
  { value: "c", label: "c", title: "Chord" },
  { value: "S", label: "S", title: "Sound effects" },
  { value: "d", label: "d", title: "Drum" },
  { value: "P", label: "P", title: "Drum pattern" },
];

export const programs: Record<Category, { code: string; name: string }[]> = {
  L: [
    "Ambient Lead", "LR 5th Lead", "Unison Lead", "Tell Min", "Feedback Lead", "Sync Lead",
    "Square Bell", "Wide Saw Lead", "XMod Lead", "Square Lead", "Unison Sweep", "3Octave Lead",
    "XY Scale", "Wave Seq", "Digital Talk", "LFO Lead", "XMod Saw Lead", "Flap Lead",
    "Tape Bell Lead", "Pitch Mod Lead",
  ].map((name, i) => ({ code: `L.${String(i).padStart(2, "0")}`, name })),
  a: ["Trumpet", "Piano", "Digerido", "Electric Sitar", "Duo Strings", "VPM Bell", "Jazz Guitar", "Tenor Sax", "Harmonica", "Flute"]
    .map((name, i) => ({ code: `a.${20 + i}`, name })),
  b: ["Hoover", "Kick Bass", "Reso Bass", "Acid Bass", "Sync LFO Bass", "Unison Bass", "Boost Bass", "XMod Bass"]
    .map((name, i) => ({ code: `b.${30 + i}`, name })),
  c: ["Trance Chord", "Sine Chord", "Organ Chord", "Sweep Chord", "Choir Chord", "Power Chord"]
    .map((name, i) => ({ code: `c.${50 + i}`, name })),
  S: ["Kaoss Drone", "Rise & Fall", "Feedback Loop", "L->R", "Noise Filter", "8bit Game"]
    .map((name, i) => ({ code: `S.${60 + i}`, name })),
  d: ["BD/SD1", "Zap/HH", "Conga", "BD/SD2", "Breakdown"].map((name, i) => ({ code: `d.${80 + i}`, name })),
  P: ["Grain Beat1", "Bass&Drum", "HPF Drum", "Grain Beat2", "Beat Box"].map((name, i) => ({ code: `P.${90 + i}`, name })),
};

export const scales = [
  { value: "OFF", label: "OFF · Off" },
  { value: "CHR", label: "CHR · Chromatic" },
  { value: "ION", label: "ION · Ionian" },
  { value: "DOR", label: "DOR · Dorian" },
  { value: "PHR", label: "PHR · Phrygian" },
  { value: "LYD", label: "LYD · Lydian" },
  { value: "MXL", label: "MXL · Mixolydian" },
  { value: "AEO", label: "AEO · Aeolian" },
  { value: "LOC", label: "LOC · Locrian" },
  { value: "MAP", label: "MAP · Major Pentatonic" },
  { value: "MIP", label: "MIP · minor Pentatonic" },
  { value: "MAB", label: "MAB · Major Blues" },
  { value: "MIB", label: "MIB · minor Blues" },
];
