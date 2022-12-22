import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square squares={squares} handleClick={handleClick} />
          <Square squares={squares} handleClick={handleClick} />
          <Square squares={squares} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square squares={squares} handleClick={handleClick} />
          <Square squares={squares} handleClick={handleClick} />
          <Square squares={squares} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square squares={squares} handleClick={handleClick} />
          <Square squares={squares} handleClick={handleClick} />
          <Square squares={squares} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
