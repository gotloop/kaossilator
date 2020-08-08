import React from "react";
import SineWaveButton from "./SineWaveButton";
import SquareWaveButton from "./SquareWaveButton";
import TriangleWaveButton from "./TriangleWaveButton";

class WaveButtons extends React.Component {
  render() {
    return (
      <div className="rnd-container" id="wave">
        <SineWaveButton></SineWaveButton>
        <SquareWaveButton></SquareWaveButton>
        <TriangleWaveButton></TriangleWaveButton>
      </div>
    );
  }
}

export default WaveButtons;
