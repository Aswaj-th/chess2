import React from 'react';
import Square from './Square';

function Row( {row, data, movePiece, moveOn, findMoveAndUpdate, highlight, }) {
    const newMoveOn=[...moveOn]
    return (
    <div className='row'>
        {/* {moveOn[row] && console.log("HI")} */}
        <Square row={row} col={0} piece={data[row*8+0]} movePiece={movePiece} moveOn={newMoveOn[0]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={1} piece={data[row*8+1]} movePiece={movePiece} moveOn={newMoveOn[1]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={2} piece={data[row*8+2]} movePiece={movePiece} moveOn={newMoveOn[2]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={3} piece={data[row*8+3]} movePiece={movePiece} moveOn={newMoveOn[3]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={4} piece={data[row*8+4]} movePiece={movePiece} moveOn={newMoveOn[4]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={5} piece={data[row*8+5]} movePiece={movePiece} moveOn={newMoveOn[5]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={6} piece={data[row*8+6]} movePiece={movePiece} moveOn={newMoveOn[6]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        <Square row={row} col={7} piece={data[row*8+7]} movePiece={movePiece} moveOn={newMoveOn[7]} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
    </div>
  )
}

export default Row