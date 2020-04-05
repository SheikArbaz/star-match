import React from "react";
import "./Starmatch.scss"

export const PlayAgain = ({onClick, gameStatus}) => (
    <div className="game-done">
        <div
            className="message"
            style={{color: gameStatus === 'lost' ? 'red' : 'green'}}
        >{gameStatus === 'lost' ? 'Lost' : 'Nice'}</div>
        <button onClick={onClick}>Play Again</button>
    </div>
);
export default PlayAgain;