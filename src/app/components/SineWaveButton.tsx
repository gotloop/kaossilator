import React from "react";

class SineWaveButton extends React.Component {
  render() {
    return (
      <button className="btn rnd btn-sine">
        <svg id="sine" viewBox="-1 -1 10 10">
          <path d="M 0,4 C 0,4 0,1 2,1 4,1 4,7 6,7 8,7 8,4 8,4" />
        </svg>
      </button>
    );
  }
}

export default SineWaveButton;
