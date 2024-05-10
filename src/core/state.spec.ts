import { useAtomValue } from "jotai";
import { scaleAtom } from "./state";

describe("state", () => {
  // initialize atoms
  describe("initialize atoms", () => {
    it("should initialize currentScaleAtom", () => {
      const currentScale = useAtomValue(scaleAtom);
      expect(currentScale).toEqual({});
    });
    it("should initialize octaveAtom", () => {
      // expect(octaveAtom).toEqual({});
    });
    it("should initialize tonicAtom", () => {
      // expect(tonicAtom).toEqual({});
    });
    it("should initialize waveFormAtom", () => {
      // expect(waveFormAtom).toEqual({});
    });
  });
});
