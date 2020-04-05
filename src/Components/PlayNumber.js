import React from "react";

export const PlayNumber = ({number, status, onClick}) => (
    <button className="number"
            onClick={() => onClick(number, status)}
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
export default PlayNumber;
