import React from "react";
import "./Starmatch.scss"

export const PlayAgain = ({onClick, gameStatus}) => (
    <div className="game-done">
        <div
            className="message"
            style={{color: gameStatus === 'lost' ? 'red': 'green'}}
        >Game is {gameStatus}</div>
        <button onClick={onClick}>Play Again</button>
    </div>
);