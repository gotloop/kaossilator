import React from "../../../web_modules/react.js";

class SineWaveButton extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", {
      className: "btn rnd btn-sine"
    }, /*#__PURE__*/React.createElement("svg", {
      id: "sine",
      viewBox: "-1 -1 10 10"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 0,4 C 0,4 0,1 2,1 4,1 4,7 6,7 8,7 8,4 8,4"
    })));
  }

}

export default SineWaveButton;
//# sourceMappingURL=SineWaveButton.js.map
