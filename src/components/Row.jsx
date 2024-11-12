import React from 'react';
import Square from './Square';

function Row( {row}) {
    const elements = [];
    for(let i = 0; i < 8; i++) {
      elements.push(<Square row={row} col={i} key={row*8+i} />);
    }
    return (
    <div className='row'>
        {elements}
    </div>
  )
}

export default Row