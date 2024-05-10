import React, { MouseEventHandler, useEffect, useRef } from "react";

import "./touchpad.component.css";
import { useAtom } from "jotai";
import {
  touchPositionAtom,
  isPlayingAtom,
  touchpadSizeAtom,
} from "../../core/state";
import { drawCircle, drawCircles, drawCross, growCircles } from "./draw.utils";

export const TouchPad: React.FC = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const { width, height } = canvasRef.current?.getBoundingClientRect() || {
    width: 0,
    height: 0,
  };
  canvasRef.current?.setAttribute("width", width.toString());
  canvasRef.current?.setAttribute("height", height.toString());
  const [, setTouchpadSize] = useAtom(touchpadSizeAtom);

  setTouchpadSize({ width, height });
  const startPlaying = () => {
    setIsPlaying(true);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
  };

  const [touchPosition, setTouchPosition] = useAtom(touchPositionAtom);

  const updatePosition = (e: MouseEvent & { target: HTMLCanvasElement }) => {
    console.log("updatePosition", e);
    if (!isPlaying) return;
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.offsetX - left;
    const y = e.clientX - top;
    setTouchPosition({ x, y });
  };

  const frameCount = useRef(0);
  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    //console.log("rendering", frameCount.current);
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(context, { x: touchPosition.x, y: touchPosition.y });
    drawCircles(context);
    drawCross(context, touchPosition, canvas);
    const { width, height } = canvas.getBoundingClientRect();
    growCircles(touchPosition, { width, height }, frameCount.current);
    frameCount.current = Math.floor(frameCount.current) + 1;
    requestRef.current = requestAnimationFrame(render);
  };/*
  useEffect(() => {
    requestRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(requestRef.current!);
    };
  });*/
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
