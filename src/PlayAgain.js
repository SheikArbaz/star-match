import React from "react";
import "./Starmatch.scss"

export const PlayAgain = ({onClick}) => (
    <div className="game-done">
        <button onClick={onClick}>Play Again</button>
    </div>
);