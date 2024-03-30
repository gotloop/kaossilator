import React, { useRef } from "react";

import "./TouchPad.css";

export const TouchPad: React.FC = (props) => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef} id="pad" {...props} />;
};
