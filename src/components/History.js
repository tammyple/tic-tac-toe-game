import React from "react";

function History({ history, undoMove }) {
  return (
    <>
      <div className="history">
        <h4>History</h4>
        <ul>
          {Array.isArray(history)
            ? history.map((step, move) => {
                const description = move
                  ? `Go to move ${move}`
                  : `Go to game start`;
                return (
                  <li key={move}>
                    <button onClick={() => undoMove(move)}>
                      {description}
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
}

export default History;
