import React from "../../../web_modules/react.js";
import Knob from "./Knob.js";
import WaveButtons from "./WaveButtons.js";
import SettingsForm from "./SettingsForm.js";
import TouchPad from "./TouchPad.js";
import './Metal.css.proxy.js';

class Metal extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "metal"
    }, /*#__PURE__*/React.createElement(Knob, null), /*#__PURE__*/React.createElement(WaveButtons, null), /*#__PURE__*/React.createElement("div", {
      id: "lcd"
    }), /*#__PURE__*/React.createElement(SettingsForm, null), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "type"
    }, "Type"), /*#__PURE__*/React.createElement("select", {
      id: "type"
    }, /*#__PURE__*/React.createElement("option", {
      value: "sine"
    }, "sine"), /*#__PURE__*/React.createElement("option", {
      value: "square"
    }, "square"), /*#__PURE__*/React.createElement("option", {
      value: "triangle"
    }, "triangle"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "tonic"
    }, "Tonic"), /*#__PURE__*/React.createElement("select", {
      id: "tonic"
    }, /*#__PURE__*/React.createElement("option", {
      value: "C"
    }, "C"), /*#__PURE__*/React.createElement("option", {
      value: "C#"
    }, "C#"), /*#__PURE__*/React.createElement("option", {
      value: "D"
    }, "D"), /*#__PURE__*/React.createElement("option", {
      value: "D#"
    }, "D#"), /*#__PURE__*/React.createElement("option", {
      value: "E"
    }, "E"), /*#__PURE__*/React.createElement("option", {
      value: "F"
    }, "F"), /*#__PURE__*/React.createElement("option", {
      value: "F#"
    }, "F#"), /*#__PURE__*/React.createElement("option", {
      value: "G"
    }, "G"), /*#__PURE__*/React.createElement("option", {
      value: "G#"
    }, "G#"), /*#__PURE__*/React.createElement("option", {
      value: "A"
    }, "A"), /*#__PURE__*/React.createElement("option", {
      value: "A#"
    }, "A#"), /*#__PURE__*/React.createElement("option", {
      value: "B"
    }, "B"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "octave"
    }, "Octave"), /*#__PURE__*/React.createElement("select", {
      id: "octave"
    }, /*#__PURE__*/React.createElement("option", {
      value: -1
    }, "-1"), /*#__PURE__*/React.createElement("option", {
      value: 0
    }, "0"), /*#__PURE__*/React.createElement("option", {
      value: 1
    }, "1"), /*#__PURE__*/React.createElement("option", {
      value: 2
    }, "2"), /*#__PURE__*/React.createElement("option", {
      value: 3
    }, "3"), /*#__PURE__*/React.createElement("option", {
      value: 4
    }, "4"), /*#__PURE__*/React.createElement("option", {
      value: 5
    }, "5"), /*#__PURE__*/React.createElement("option", {
      value: 6
    }, "6"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "mode"
    }, "Mode"), /*#__PURE__*/React.createElement("select", {
      id: "mode"
    }, /*#__PURE__*/React.createElement("option", {
      value: "none"
    }, "none"), /*#__PURE__*/React.createElement("option", {
      value: "semitone"
    }, "semitone"), /*#__PURE__*/React.createElement("option", {
      value: "ionian"
    }, "ionian"), /*#__PURE__*/React.createElement("option", {
      value: "dorian"
    }, "dorian"), /*#__PURE__*/React.createElement("option", {
      value: "phrygian"
    }, "phrygian"), /*#__PURE__*/React.createElement("option", {
      value: "lydian"
    }, "lydian"), /*#__PURE__*/React.createElement("option", {
      value: "mixolydian"
    }, "mixolydian"), /*#__PURE__*/React.createElement("option", {
      value: "aeolian"
    }, "aeolian"), /*#__PURE__*/React.createElement("option", {
      value: "locrian"
    }, "locrian"))), /*#__PURE__*/React.createElement(TouchPad, null));
  }

}

export default Metal;
//# sourceMappingURL=Metal.js.map
