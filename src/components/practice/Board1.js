import React from 'react';
import Cell1 from './Cell1'

const Board1 = (props) => {
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell1
                    key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
                ></Cell1>
            ))}
        </div>
    );
};

export default Board1;