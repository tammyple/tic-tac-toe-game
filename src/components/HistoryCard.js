import React from "react";
import HistoryList from "./HistoryList";

function HistoryCard(count, handleRestart) {
  return (
    <>
      <div className="history-container">
        <h3>History</h3>
        <ul>
          <li>
            <button onClick={handleRestart}>Go to game start</button>
          </li>
          <HistoryList count={count} />
        </ul>
      </div>
    </>
  );
}

export default HistoryCard;
