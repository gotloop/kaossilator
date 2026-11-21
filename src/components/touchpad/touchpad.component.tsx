import React, { useEffect, useRef } from "react";
import { useSetAtom, useStore } from "jotai";

import "./touchpad.component.css";
import {
  touchPositionAtom,
  isPlayingAtom,
  touchpadSizeAtom,
} from "../../core/state";
import { drawCircle, drawCircles, drawCross, growCircles } from "./draw.utils";

const clamp = (value: number, max: number) => Math.min(Math.max(value, 0), max);

export const TouchPad: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const store = useStore();
  const setIsPlaying = useSetAtom(isPlayingAtom);
  const setTouchPosition = useSetAtom(touchPositionAtom);
  const setTouchpadSize = useSetAtom(touchpadSizeAtom);

  // Keep the canvas drawing buffer and the size atom in sync with the CSS size.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      canvas.width = width;
      canvas.height = height;
      setTouchpadSize({ width, height });
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [setTouchpadSize]);

  // Animation loop. Reads atoms straight from the store so it never re-renders React.
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frameCount = 0;
    let requestId = 0;
    const render = () => {
      const position = store.get(touchPositionAtom);
      const isPlaying = store.get(isPlayingAtom);
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawCircles(context);
      if (isPlaying) {
        drawCross(context, position, canvas);
        drawCircle(context, position);
      }
      growCircles(position, canvas, frameCount, isPlaying);
      frameCount++;
      requestId = requestAnimationFrame(render);
    };
    requestId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(requestId);
  }, [store]);

  const updatePosition = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = e.currentTarget;
    const { left, top } = canvas.getBoundingClientRect();
    setTouchPosition({
      x: clamp(e.clientX - left, canvas.width),
      y: clamp(e.clientY - top, canvas.height),
    });
  };

  const startPlaying = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e);
    setIsPlaying(true);
  };

  const movePointer = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (store.get(isPlayingAtom)) updatePosition(e);
  };

  const stopPlaying = () => setIsPlaying(false);

  return (
    <canvas
      ref={canvasRef}
      className="touchpad"
      onPointerDown={startPlaying}
      onPointerMove={movePointer}
      onPointerUp={stopPlaying}
      onPointerCancel={stopPlaying}
    />
  );
};
