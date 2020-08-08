export interface KaossState {
  bpm: number;
  type: "sine";
  scales: { [key: string]: string };
  selectedScale?: "none";
  currentOffset?: number;
  currentPitch?: number;
  isPlaying?: boolean;
}

export function initialState(): KaossState {
  return {
    bpm: 120,
    type: "sine",
    scales: {},
  };
}
