import { useState, useEffefct, useEffect } from 'react';
import './clock.css'

const Clock = ({moveDetails, declareWinner, gameOver}) => {

    const [timerWhite, setTimerWhite] = useState(600);
    const [timerBlack, setTimerBlack] = useState(600);

    useEffect(() => {
        setTimerBlack(600);
        setTimerWhite(600);
    }, [gameOver])

    useEffect(() => {
        if(moveDetails.move === "w") {
            const timer1 = setInterval(() => {
                if(timerWhite-1 === 0) {
                    declareWinner("w");
                    return;
                }
                setTimerWhite((time) => time-1);
            }, 1000)
            return () => clearInterval(timer1);
        } else if(moveDetails.move === "b") {
            let timer2 = setInterval(() => {
                if(timerBlack-1 === 0) {
                    declareWinner("b");
                    return;
                }
                setTimerBlack((time) => time-1);
            }, 1000)
            return () => clearInterval(timer2);
        }
    }, [moveDetails])

    return (
        <div className='clockEncloser'>
        <div className='clock cl1'>
            {Math.floor(timerBlack/60) > 9 ? Math.floor(timerBlack/60) : Math.floor(timerBlack/60) > 0 ? `0${Math.floor(timerBlack/60)}`: "00"}:{timerBlack%60 > 9 ? timerBlack%60 : timerBlack%60 > 0 ? "0"+timerBlack%60 : "00"}
        </div>
        <div className="clock cl2">
            {Math.floor(timerWhite/60) > 9 ? Math.floor(timerWhite/60) : Math.floor(timerWhite/60) > 0 ? `0${Math.floor(timerWhite/60)}`: "00"}:{timerWhite%60 > 9 ? timerWhite%60 : timerWhite%60 > 0 ? "0"+timerWhite%60 : "00"}
        </div>
        </div>
    );
};

export default Clock;