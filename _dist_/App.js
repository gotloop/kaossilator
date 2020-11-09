import React from '../web_modules/react.js';
import Kaossillator from './app/components/Kaossillator.js';
if (typeof AudioContext === "undefined") console.error('audio api not supported');
export default function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "sr-only"
  }, "Kaossilator"), /*#__PURE__*/React.createElement(Kaossillator, null));
}
//# sourceMappingURL=App.js.map
