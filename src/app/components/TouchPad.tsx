import React, { useRef } from "react";

import "./TouchPad.css";
const TouchPad: React.FunctionComponent = (props) => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef} id="pad" {...props} />;
};

export default TouchPad;
