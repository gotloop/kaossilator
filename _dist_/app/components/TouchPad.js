function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef } from "../../../web_modules/react.js";
import "./TouchPad.css.proxy.js";

const TouchPad = props => {
  const canvasRef = useRef(null);
  return /*#__PURE__*/React.createElement("canvas", _extends({
    ref: canvasRef,
    id: "pad"
  }, props));
};

export default TouchPad;