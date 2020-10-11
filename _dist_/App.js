import React from '../web_modules/react.js';
import Kaossillator from './app/components/Kaossillator.js';
if (typeof AudioContext === "undefined") alert('audio api not supported');
export default function App() {
  return /*#__PURE__*/React.createElement(Kaossillator, null);
}