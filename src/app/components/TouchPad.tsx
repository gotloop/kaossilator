import React, { MouseEventHandler, useRef } from "react";

import "./TouchPad.css";
import { useAtom } from "jotai";
import { currentPositionAtom, isPlayingAtom } from "../../core/state";

export const TouchPad: React.FC = (props) => {
  const canvasRef = useRef(null);

  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  const startPlaying = () => {
    setIsPlaying(true);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
  };

  const [, setCurrentPosition] = useAtom(currentPositionAtom);

  const updatePosition = (e: MouseEvent & { target: HTMLCanvasElement }) => {
    if (!isPlaying) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCurrentPosition({ x, y });
  };

  return (
    <canvas
      ref={canvasRef}
      className="touchpad"
      {...props}
      onMouseDown={startPlaying}
      onMouseUp={stopPlaying}
      onMouseMove={
        updatePosition as unknown as MouseEventHandler<HTMLCanvasElement>
      }
    />
  );
};
