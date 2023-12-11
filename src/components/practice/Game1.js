import React, { useState } from 'react';
import Board1 from './Board1';
import { calculateWinner } from '../../helpers';
import './style.css'

const Game1 = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)


    const winner = calculateWinner(board)
    
    const handleClick = (index) => {
        const boardCopy = [...board]
        if(winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? "X" : "O"
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const handleResest = ()=> {
        setBoard(Array(9).fill(null))
        setXIsNext(false)
    }
    return (
        <div className='game'>
            <Board1 cells={board} onClick={handleClick}></Board1>
            <div>Người chiến thắng là: {winner}</div>
            <button className="btn" onClick={handleResest}>Reset Game</button>
        </div>
    );
};

export default Game1;