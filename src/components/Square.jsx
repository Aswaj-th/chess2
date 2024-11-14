import {useContext} from 'react'
import { ReactSVG } from 'react-svg';
import { FullContext } from './MainBoard';
import './square.css';
// import { useState } from 'react';

function Square({row, col}) {

    const {moveOn, data, highlight, movePiece, findMoveAndUpdateMoveOn} = useContext(FullContext);
    const piece = data[row*8+col];

    const currentMoveOn = moveOn[row*8+col];
    
    const handleClick = (e) => {
        if(!currentMoveOn) findMoveAndUpdateMoveOn(e, row, col, piece);
        else movePiece(row*8+col);
    }
    const white = ((row+col)%2 === 0);
    return (
        <div className="square" style={{background: highlight === row*8+col ? 'yellow' : white ? "white" : "#26f030"}} onClick={(e) => handleClick(e)}>
            {piece !== null && <ReactSVG src={piece.pic} />}
            {currentMoveOn && <div className='dot'></div>}
        </div>
  )
}

export default Square