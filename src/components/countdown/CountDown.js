import React from 'react';
import { useReducer } from 'react';
import './style.css'

const initState = 0

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (initState, action) => {
    switch (action) {
        case UP_ACTION:
            return initState + 1
        case DOWN_ACTION:
            return initState - 1
        default:
            break;
    }
}

const CountDown = () => {
    const [count, dispath]= useReducer(reducer, initState)

    return (
        <div className='count_down'>
            <h1>{count}</h1>
            <div className="count-control">
            <button
                    onClick={()=> dispath(DOWN_ACTION)}
                >
                    {DOWN_ACTION}
                </button>
                <button
                    onClick={()=> dispath(UP_ACTION)}
                >
                    {UP_ACTION}
                </button>
            </div>
        </div>
    );
};

export default CountDown;