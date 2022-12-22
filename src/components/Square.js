import React from "react";

function Square({ squares, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {squares}
    </button>
  );
}

export default Square;
