import React from "react";

class SquareWaveButton extends React.Component {
  render() {
    return (
      <button className="btn rnd btn-square">
        <svg id="square" viewBox="-1 -1 10 10">
          <path d="M 0,1 0,7 4,7 4,1 8,1 8,7" />
        </svg>
      </button>
    );
  }
}

export default SquareWaveButton;
