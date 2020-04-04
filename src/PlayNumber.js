import React from "react";

export const PlayNumber = ({number, status}) => (
    <button className="number"
            onClick={() => console.log(number)}
            style={{backgroundColor: colors[status]}}
    >
        {number}
    </button>
);

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};
