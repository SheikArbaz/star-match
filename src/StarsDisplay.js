import {utils} from "./utils";
import React from "react";

export const StarsDisplay = ({count}) => (
    <>
    {utils.range(1, count)
            .map(starId =>
                <div key={starId} className="star"/>
            )
    }
    </>
    );