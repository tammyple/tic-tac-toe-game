import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [stepNum, setStepNum] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    const newWinner = calculateWinner(history[history.length - 1].squares);
    setWinner(newWinner);
  }, [history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNum + 1);
    const current = currentHistory[currentHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      currentHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNum(currentHistory.length);
    setXIsNext((value) => !value);
  };

  //Restart game
  const handleRestart = () => {
    setHistory([
      {
        squares: Array(9).fill(null),
      },
    ]);
    setStepNum(0);
    setXIsNext(true);
  };

  //Undo moves
  const undoMove = (move) => {
    setStepNum(move);
    setXIsNext(move % 2 === 0 ? true : false);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <div className="left-side">
          <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
          <Board squares={history[stepNum].squares} handleClick={handleClick} />
        </div>
        <History history={history} undoMove={undoMove} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
