import React from "react";

function History({ history, undoMove }) {
  return (
    <>
      <div className="history-container">
        <h3>History</h3>
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
