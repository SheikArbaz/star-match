import React from "react";

export const PlayNumber = ({number}) => (
    <button className="number"
            onClick={() => console.log(number)}
    >
        {number}
    </button>
);