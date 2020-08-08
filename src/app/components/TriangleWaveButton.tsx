import React from "react";

class TriangleWaveButton extends React.Component {
  render() {
    return (
      <button className="btn rnd btn-triangle">
        <svg id="triangle" viewBox="-1 -1 10 10">
          <path d="M 0,4 2,8 6,0 8,4" />
        </svg>
      </button>
    );
  }
}

export default TriangleWaveButton;
