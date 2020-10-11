import React from "../../../web_modules/react.js";
import SineWaveButton from "./SineWaveButton.js";
import SquareWaveButton from "./SquareWaveButton.js";
import TriangleWaveButton from "./TriangleWaveButton.js";

class WaveButtons extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "rnd-container",
      id: "wave"
    }, /*#__PURE__*/React.createElement(SineWaveButton, null), /*#__PURE__*/React.createElement(SquareWaveButton, null), /*#__PURE__*/React.createElement(TriangleWaveButton, null));
  }

}

export default WaveButtons;