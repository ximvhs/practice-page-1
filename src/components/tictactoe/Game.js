import React, { useState } from 'react';
import Board from './Board';
import './GameStyle.css'
import { calculateWinner } from '../../helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    
    const winner =  calculateWinner(board)
    
    const handleClick = (index) => {
        const boardCopy = [...board]
        if(winner || boardCopy[index]) return ;
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const handleResestGame = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true)
    }

      

    return (
        <div className='game'>
            <Board cells={board} onClick={handleClick}></Board>
            {winner && <div>Người chiến thắng là {winner}</div>}
            <button className='btn' onClick={handleResestGame}>Resest Game</button>
        </div>
    );
};

export default Game;