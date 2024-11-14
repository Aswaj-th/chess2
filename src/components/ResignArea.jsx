import { useState } from 'react';
import './resignarea.css'

const ResignArea = ({declareWinner}) => {

    return (
        <div className='resignEncloser'>
        <div className='resign r1' onClick={() => declareWinner("b")}>
            Resign
        </div>
        <div className="resign r2" onClick={() => declareWinner("w")}>
            Resign
        </div>
        </div>
    );
};

export default ResignArea;