import React, {useState} from 'react';
import './Starmatch.scss'
import {utils} from "./utils";
import {PlayNumber} from "./PlayNumber";
import {StarsDisplay} from "./StarsDisplay";

export const StarMatch = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState([1, 2, 3, 4]);
    const [candidateNums, setCanditateNums] = useState([2, 3]);

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay count={stars}/>
                </div>
                <div className="right">
                    {utils.range(1, 9)
                        .map(number =>
                            <PlayNumber
                                key={number}
                                number={number}
                                status={numberStatus(number)}
                            />
                        )
                    }
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};