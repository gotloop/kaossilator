/**
 * Convert coordinates from pixels touched on the canvas to values between -1 and 1.
 */
export function convertCoordinates(x: number, y: number, w: number, h: number) {
  return {
    pitch: (x / w) * 2 - 1,
    volume: ((y / h) * 2) / 1,
  };
}
