import React from 'react'
import Row from './Row';
import Clock from './Clock';
import './mainboard.css'
import jsonData from '../pieces.json';
import { useState, useContext, createContext } from 'react';
import ResignArea from './ResignArea';
import FullContext from './context';

const createBoard = () => {
    let arr = [];
    let j = 0;
    for(let i = 0; i < 64; i++) {
        if(i < 16) arr.push(jsonData[j++]);
        else if(i < 48) arr.push(null);
        else arr.push(jsonData[j++]);
    }
    return arr;
}

const createMoveOnArray = () => {
    let arr = Array(64).fill(false, 0);
    return arr;
}

function MainBoard() {
    
    const [data, setData] = useState(createBoard());
    const [moveOn, setMoveOn] = useState(createMoveOnArray());
    const [moveDetails, setMoveDetails] = useState({
        move: "w",
        checks: [],
        safeCells: Array(64).fill(true)
    });
    const [gameOver, setGameOver] = useState(false);
    const [highlight, setHighlight] = useState(null);
    const [kingPositions, setKingPositions] = useState({
        white: [7, 3],
        black: [0, 3]
    });
    const [illegals, setIllegals] = useState({
        w: 0,
        b: 0
    })

    const changeMoveOn = (row, col, piece) => {
        if(piece.piece === 'r') {
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            while(i < 7) {
                i++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(j < 7) {
                j++;
                if(data[(i*8)+j] != null) {
                    // console.log(data[i*8+j])
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i > 0) {
                i--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(j > 0) {
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            setMoveOn(arr);
            // console.log(moveOn);
        } else if(piece.piece === 'b') {
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            while(i < 7 && j < 7) {
                i++;
                j++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i < 7 && j > 0) {
                i++;
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i > 0 && j < 7) {
                i--;
                j++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(i > 0 && j > 0) {
                i--;
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            setMoveOn(arr);
            // console.log(moveOn);
        } else if(piece.piece === 'q') {
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            while(i < 7) {
                i++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(j < 7) {
                j++;
                if(data[(i*8)+j] != null) {
                    // console.log(data[i*8+j])
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i > 0) {
                i--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(j > 0) {
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i < 7 && j < 7) {
                i++;
                j++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i < 7 && j > 0) {
                i++;
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i = row;
            j = col;
            while(i > 0 && j < 7) {
                i--;
                j++;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            i=row;
            j=col;
            while(i > 0 && j > 0) {
                i--;
                j--;
                if(data[(i*8)+j] != null) {
                    if(data[(i*8)+j].col !== piece.col) {
                        arr[(i*8)+j] = true;
                    }
                    break;
                } else {
                    arr[(i*8)+j] = true;
                }
            }
            setMoveOn(arr);
        } else if(piece.piece === 'k') {
            // console.log(piece)
            // console.log(row, col)
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            if(i > 0) {
                if(data[(i-1)*8+j] == null || data[(i-1)*8+j].col !== piece.col) {
                    arr[(i-1)*8+j] = true;
                }
                if(j > 0 && (data[(i-1)*8+j-1] == null || data[(i-1)*8+j-1].col !== piece.col)) {
                    arr[(i-1)*8+j-1] = true;
                }
                if(j < 7 && (data[(i-1)*8+j+1] == null ||  data[(i-1)*8+j+1].col !== piece.col)) {
                    arr[(i-1)*8+j+1] = true;
                }
            }
            if(j > 0 && (data[i*8+j-1] == null || data[i*8+j-1].col !== piece.col)) {
                arr[i*8+j-1] = true;
            }
            if(j < 7 && (data[i*8+j+1] == null || data[i*8+j+1].col !== piece.col)) {
                arr[i*8+j+1] = true;
            }
            if(i < 7) {
                if(data[(i+1)*8+j] == null || data[(i+1)*8+j].col !== piece.col) {
                    arr[(i+1)*8+j] = true;
                }
                if(j > 0 && (data[(i+1)*8+j-1] == null || data[(i+1)*8+j-1].col !== piece.col)) {
                    arr[(i+1)*8+j-1] = true;
                }
                if(j < 7 && (data[(i+1)*8+j+1] == null || data[(i+1)*8+j+1].col !== piece.col)) {
                    arr[(i+1)*8+j+1] = true;
                }
            }
            if(!(data[row*8+col].moved)) {
                // console.log(data, moveDetails.safeCells);
                if(row === 0) {
                    if(data[0].piece === "r" && !(data[0].moved) && !data[1] && !data[2] && !data[3] && moveDetails.safeCells[1] && moveDetails.safeCells[2] && moveDetails.safeCells[3] && moveDetails.safeCells[4]) {
                        arr[col-2] = true;
                    }
                    if(data[7].piece === "r" && !(data[7].moved) && !data[6] && !data[5] && moveDetails.safeCells[6] && moveDetails.safeCells[5] && moveDetails.safeCells[4]) {
                        arr[col+2] = true;
                    }
                }
                if(row === 7) {
                    if(data[56].piece === "r" && !(data[56].moved) && !data[57] && !data[58] && !data[59] && moveDetails.safeCells[57] && moveDetails.safeCells[58] && moveDetails.safeCells[59] && moveDetails.safeCells[60]) {
                        arr[56+col-2] = true;
                    }
                    if(data[63].piece === "r" && !(data[63].moved) && !data[62] && !data[61] && moveDetails.safeCells[62] && moveDetails.safeCells[61] && moveDetails.safeCells[60]) {
                        arr[56+col+2] = true;
                    }
                }
            }
            setMoveOn(arr);
        } else if(piece.piece === 'n') {
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            if(i > 0) {
                if(j > 1 && (data[(i-1)*8+j-2] == null || data[(i-1)*8+j-2].col !== piece.col)) {
                    arr[(i-1)*8+j-2] = true;
                }
                if(j < 6 && (data[(i-1)*8+j+2] == null || data[(i-1)*8+j+2].col !== piece.col)) {
                    arr[(i-1)*8+j+2] = true;
                }
            }
            if(i > 1) {
                if(j > 0 && (data[(i-2)*8+j-1] == null || data[(i-2)*8+j-1].col !== piece.col)) {
                    arr[(i-2)*8+j-1] = true;
                }
                if(j < 7 && (data[(i-2)*8+j+1] == null || data[(i-2)*8+j+1].col !== piece.col)) {
                    arr[(i-2)*8+j+1] = true;
                }
            }
            if(i < 6) {
                if(j > 0 && (data[(i+2)*8+j-1] == null || data[(i+2)*8+j-1].col !== piece.col)) {
                    arr[(i+2)*8+j-1] = true;
                }
                if(j < 7 && (data[(i+2)*8+j+1] == null || data[(i+2)*8+j+1].col !== piece.col)) {
                    arr[(i+2)*8+j+1] = true;
                }
            }
            if(i < 7) {
                if(j > 1 && (data[(i+1)*8+j-2] == null || data[(i+1)*8+j-2].col !== piece.col)) {
                    arr[(i+1)*8+j-2] = true;
                }
                if(j < 6 && (data[(i+1)*8+j+2] == null || data[(i+1)*8+j+2].col !== piece.col)) {
                    arr[(i+1)*8+j+2] = true;
                }
            }
            setMoveOn(arr);
        } else if(piece.piece === 'p') {
            let i = row;
            let j = col;
            let arr = highlight ? Array(64).fill(false, 0) : [...moveOn];
            if(piece.col === 'b') {
                if(data[(i+1)*8+j] == null) {
                    arr[(i+1)*8+j] = true;
                }
                if(i === 1 && data[(i+1)*8+j] == null && data[(i+2)*8+j] == null) {
                    arr[(i+2)*8+j] = true;
                }
                if(j > 0 && data[(i+1)*8+j-1] != null && data[(i+1)*8+j-1].col !== piece.col) {
                    arr[(i+1)*8+j-1] = true;
                }
                if(j < 7 && data[(i+1)*8+j+1] != null && data[(i+1)*8+j+1].col !== piece.col) {
                    arr[(i+1)*8+j+1] = true;
                }
            } else if(piece.col === 'w') {
                if(data[(i-1)*8+j] == null) {
                    arr[(i-1)*8+j] = true;
                }
                if(i === 6 && data[(i-1)*8+j] == null && data[(i-2)*8+j] == null) {
                    arr[(i-2)*8+j] = true;
                }
                if(j > 0 && data[(i-1)*8+j-1] != null && data[(i-1)*8+j-1].col !== piece.col) {
                    arr[(i-1)*8+j-1] = true;
                }
                if(j < 7 && data[(i-1)*8+j+1] != null && data[(i-1)*8+j+1].col !== piece.col) {
                    arr[(i-1)*8+j+1] = true;
                }
            }
            setMoveOn(arr);
        }
    }

    const checkForChecks = (data, move) => {
        let checks = [];
        let safeCellsDupe = Array(64).fill(true);
        data.forEach((el, ind) => {
            if(el) {
                if(el.col === move) {
                    if(el.piece === 'r') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7) {
                            i++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "t"});
                                }
                                break;
                            }
                        }
                        i=Math.floor(ind/8);
                        while(j < 7) {
                            j++;
                            safeCellsDupe[i*8+j] = false;
                            // console.log(i, j);
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "l"});
                                }
                                break;
                            }
                        }
                        j = ind%8;
                        while(i > 0) {
                            i--;
                            safeCellsDupe[i*8+j] = false;
                            // console.log(i, j);
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "b"});
                                }
                                break;
                            }
                        }
                        i=Math.floor(ind/8);
                        while(j > 0) {
                            j--;
                            safeCellsDupe[i*8+j] = false;
                            // console.log(i, j);
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "r"});
                                }
                                break;
                            }
                        }
                    } else if(el.piece === 'b') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7 && j < 7) {
                            i++;
                            j++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "tl"});
                                }
                                break;
                            }
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i < 7 && j > 0) {
                            i++;
                            j--;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "tr"});
                                }
                                break;
                            }
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j < 7) {
                            i--;
                            j++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "bl"});
                                }
                                break;
                            }
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j > 0) {
                            i--;
                            j--;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "br"});
                                }
                                break;
                            }
                        }
                    } else if(el.piece === 'q') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7) {
                            i++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "t"});
                                }
                                break;
                            }
                        }
                        i=Math.floor(ind/8);
                        while(j < 7) {
                            j++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "l"});
                                }
                                break;
                            }
                        }
                        j = ind%8;
                        while(i > 0) {
                            i--;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "b"});
                                }
                                break;
                            }
                        }
                        i=Math.floor(ind/8);
                        while(j > 0) {
                            j--;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "r"});
                                }
                                break;
                            }
                        }
                        i=Math.floor(ind/8);
                        j=ind%8;
                        while(i < 7 && j < 7) {
                            i++;
                            j++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "tl"});
                                }
                                break;
                            }
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i < 7 && j > 0) {
                            i++;
                            j--;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "tr"});
                                }
                                break;
                            }
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j < 7) {
                            i--;
                            j++;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "bl"});
                                }
                                break;
                            }
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j > 0) {
                            i--;
                            j--;
                            safeCellsDupe[i*8+j] = false;
                            if(data[(i*8)+j] != null) {
                                if(data[(i*8)+j].col === move) break;
                                if(data[(i*8)+j].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "br"});
                                }
                                break;
                            }
                        }
                    } else if(el.piece === 'n') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        if(i > 0) {
                            if(j > 1) {
                                safeCellsDupe[(i-1)*8+j-2] = false;
                                if(data[(i-1)*8+j-2] != null && data[(i-1)*8+j-2].col !== move && data[(i-1)*8+j-2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                            if(j < 6) {
                                safeCellsDupe[(i-1)*8+j+2] = false;
                                if(data[(i-1)*8+j+2] != null && data[(i-1)*8+j+2].col !== move && data[(i-1)*8+j+2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                        }
                        if(i > 1) {
                            if(j > 0) {
                                safeCellsDupe[(i-2)*8+j-1] = false;
                                if(data[(i-2)*8+j-1] != null && data[(i-2)*8+j-1].col !== move && data[(i-2)*8+j-1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                            if(j < 7) {
                                safeCellsDupe[(i-2)*8+j+1] = false;
                                if(data[(i-2)*8+j+1] != null && data[(i-2)*8+j+1].col !== move && data[(i-2)*8+j+1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                        }
                        if(i < 6) {
                            if(j > 0) {
                                safeCellsDupe[(i+2)*8+j-1] = false;
                                if(data[(i+2)*8+j-1] != null && data[(i+2)*8+j-1].col !== move && data[(i+2)*8+j-1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                            if(j < 7) {
                                safeCellsDupe[(i+2)*8+j+1] = false;
                                if(data[(i+2)*8+j+1] != null && data[(i+2)*8+j+1].col !== move && data[(i+2)*8+j+1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                        }
                        if(i < 7) {
                            if(j > 1) {
                                safeCellsDupe[(i+1)*8+j-2] = false;
                                if(data[(i+1)*8+j-2] != null && data[(i+1)*8+j-2].col !== move && data[(i+1)*8+j-2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                            if(j < 6) {
                                safeCellsDupe[(i+1)*8+j+2] = false;
                                if(data[(i+1)*8+j+2] != null && data[(i+1)*8+j+2].col !== move && data[(i+1)*8+j+2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                }
                            }
                        }
                    } else if(el.piece === 'p') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        if(el.col === 'w') {
                            if(i > 0) {
                                if(j < 7) {
                                    safeCellsDupe[(i-1)*8+j+1] = false;
                                    if(data[(i-1)*8+j+1] && data[(i-1)*8+j+1].col !== move && data[(i-1)*8+j+1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                    }
                                }
                                if(j > 0) {
                                    safeCellsDupe[(i-1)*8+j-1] = false;
                                    if(data[(i-1)*8+j-1] && data[(i-1)*8+j-1].col !== move && data[(i-1)*8+j-1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                    }
                                }
                            }
                        } else if(el.col === 'b') {
                            if(i < 7) {
                                if(j < 7) {
                                    safeCellsDupe[(i+1)*8+j+1] = false;
                                    if(data[(i+1)*8+j+1] && data[(i+1)*8+j+1].col !== move && data[(i+1)*8+j+1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                    }
                                }
                                if(j > 0) {
                                    safeCellsDupe[(i+1)*8+j-1] = false;
                                    if(data[(i+1)*8+j-1] && data[(i+1)*8+j-1].col !== move && data[(i+1)*8+j-1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8, type: "ub"});
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        console.log("checks: "+checks.length);
        return {checks: checks, safeCellsDupe: safeCellsDupe};
    }

    const declareWinner = (color) => {
        console.log(`Game over ${color === "w" ? "white" : "black"} lost the game`);
        setData(createBoard());
        setMoveOn(createMoveOnArray());
        setMoveDetails({
            move: "w",
            checks: [],
            safeCells: Array(64).fill(true)
        })
        setHighlight(null);
        setKingPositions({
            white: [7, 3],
            black: [0, 3]
        })
        setIllegals({
            w: 0,
            b: 0
        })
        setGameOver((val) => !val);
    }

    const findReachable = (data, whoseMoveIsIt) => {
        console.log("move", whoseMoveIsIt);
        let reachable = Array(64).fill(false);
        data.forEach((el, ind) => {
            if(el) {
                if(el.col === whoseMoveIsIt) {
                    if(el.piece === 'r') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7) {
                            i++;
                            console.log("rook going down")
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i=Math.floor(ind/8);
                        while(j < 7) {
                            j++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        j = ind%8;
                        while(i > 0) {
                            i--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i=Math.floor(ind/8);
                        while(j > 0) {
                            j--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                    } else if(el.piece === 'b') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7 && j < 7) {
                            i++;
                            j++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i < 7 && j > 0) {
                            i++;
                            j--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j < 7) {
                            i--;
                            j++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j > 0) {
                            i--;
                            j--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                    } else if(el.piece === 'q') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7) {
                            i++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i=Math.floor(ind/8);
                        while(j < 7) {
                            j++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        j = ind%8;
                        while(i > 0) {
                            i--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i=Math.floor(ind/8);
                        while(j > 0) {
                            j--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i=Math.floor(ind/8);
                        j=ind%8;
                        while(i < 7 && j < 7) {
                            i++;
                            j++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i < 7 && j > 0) {
                            i++;
                            j--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j < 7) {
                            i--;
                            j++;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                        i = Math.floor(ind/8);
                        j = ind%8;
                        while(i > 0 && j > 0) {
                            i--;
                            j--;
                            reachable[i*8+j] = true;
                            if(data[(i*8)+j] != null) break;
                        }
                    } else if(el.piece === 'n') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        if(i > 0) {
                            if(j > 1) reachable[(i-1)*8+j-2] = true;
                            if(j < 6) reachable[(i-1)*8+j+2] = true;
                        }
                        if(i > 1) {
                            if(j > 0) reachable[(i-2)*8+j-1] = true;
                            if(j < 7) reachable[(i-2)*8+j+1] = true;
                        }
                        if(i < 6) {
                            if(j > 0) reachable[(i+2)*8+j-1] = true;
                            if(j < 7) reachable[(i+2)*8+j+1] = true;
                        }
                        if(i < 7) {
                            if(j > 1) reachable[(i+1)*8+j-2] = true;
                            if(j < 6) reachable[(i+1)*8+j+2] = true;
                        }
                    } else if(el.piece === 'p') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        if(el.col === 'w') {
                            if(i > 0) {
                                reachable[(i-1)*8+j] = true;
                                if(j < 7) reachable[(i-1)*8+j+1] = true;
                                if(j > 0) reachable[(i-1)*8+j-1] = true;
                            }
                        } else if(el.col === 'b') {
                            if(i < 7) {
                                reachable[(i+1)*8+j] = true;
                                if(j < 7) reachable[(i+1)*8+j+1] = true;
                                if(j > 0) reachable[(i+1)*8+j-1] = true;
                            }
                        }
                    }
                }
            }
        })
        console.log("Inside", reachable);
        return reachable;
    }

    const checkForMate = (data, checksAndSafeSquares) => {
        const whoseMoveIsIt = moveDetails.move === 'w' ? 'b': 'w';
        let [krow, kcol] = kingPositions[whoseMoveIsIt === 'w' ? "white" : "black"];
        if(krow > 0) {
            if(kcol > 0 && moveDetails.safeCells[(krow-1)*8+kcol-1] && (data[(krow-1)*8+kcol-1] == null || data[(krow-1)*8+kcol-1].kcol === moveDetails.move)) return false;
            if(moveDetails.safeCells[(krow-1)*8+kcol] && (data[(krow-1)*8+kcol] == null || data[(krow-1)*8+kcol].kcol === moveDetails.move)) return false;
            if(kcol < 7 && moveDetails.safeCells[(krow-1)*8+kcol+1] && (data[(krow-1)*8+kcol+1] == null || data[(krow-1)*8+kcol+1].kcol === moveDetails.move)) return false;
        }
        if(kcol > 0 && moveDetails.safeCells[krow*8+kcol-1] && (data[krow*8+kcol-1] == null || data[krow*8+kcol-1].kcol === moveDetails.move)) return false;
        if(kcol < 7 && moveDetails.safeCells[krow*8+kcol+1] && (data[krow*8+kcol+1] == null || data[krow*8+kcol+1].kcol === moveDetails.move)) return false;
        if(krow < 7) {
            if(kcol > 0 && moveDetails.safeCells[(krow+1)*8+kcol-1] && (data[(krow+1)*8+kcol-1] == null || data[(krow+1)*8+kcol-1].kcol === moveDetails.move)) return false;
            if(moveDetails.safeCells[(krow+1)*8+kcol] && (data[(krow+1)*8+kcol] == null || data[(krow+1)*8+kcol].kcol === moveDetails.move)) return false;
            if(kcol < 7 && moveDetails.safeCells[(krow+1)*8+kcol+1] && (data[(krow+1)*8+kcol+1] == null || data[(krow+1)*8+kcol+1].kcol === moveDetails.move)) return false;
        }
        if(checksAndSafeSquares.checks.length > 1) return true;
        const check = checksAndSafeSquares.checks[0];
        const reachable = findReachable(data, whoseMoveIsIt);
        let i = check.i, j = check.j;
        console.log("bottom half", check.type)
        console.log(reachable);
        switch(check.type) {
            case "ub":
                if(reachable[i*8+j]) return false;
                return true;
            case "t":
                while(i < krow) {
                    if(reachable[i*8+j]) return false;
                    i++;
                }
                return true;
            case "b":
                while(i > krow) {
                    if(reachable[i*8+j]) return false;
                    i--;
                }
                return true;
            case "l":
                while(j < kcol) {
                    if(reachable[i*8+j]) return false;
                    j++;
                }
                return true;
            case "r":
                while(j > kcol) {
                    if(reachable[i*8+j]) return false;
                    j--;
                }
                return true;
            case "tl":
                while(i < krow) {
                    if(reachable[i*8+j]) return false;
                    i++;
                    j++;
                }
                return true;
            case "tr":
                while(i < krow) {
                    if(reachable[i*8+j]) return false;
                    i++;
                    j--;
                }
                return true;
            case "bl":
                while(i > krow) {
                    if(reachable[i*8+j]) return false;
                    i--;
                    j++;
                }
                return true;
            case "br":
                while(i > krow) {
                    if(reachable[i*8+j]) return false;
                    i--;
                    j--;
                }
                return true;
            default:
                console.log("error: Undefined check type: "+check.type);
        }
    }

    const movePiece = (ind) => {
        const newData = [...data];
        newData[ind] = newData[highlight];
        newData[highlight] = null;
        let returnValuefromCheckForChecks = checkForChecks(newData, moveDetails.move === 'w' ? 'b' : 'w');
        if(returnValuefromCheckForChecks.checks.length > 0) {
            console.log("Illegal move");
            const newIllegals = {...illegals};
            newIllegals[moveDetails.move]++;
            if(newIllegals[moveDetails.move] > 2) {
                declareWinner(moveDetails.move);
                return;
            }
            setIllegals(newIllegals);
            setHighlight(null);
            setMoveOn(createMoveOnArray());
            return;
        }
        if(newData[ind].piece === 'k' && moveDetails.move === 'b') {
            if(!(newData[ind].moved)) {
                if(ind == 2) {
                    newData[3] = newData[0];
                    newData[0] = null;
                    newData[3].moved = true;
                } else if(ind == 6) {
                    newData[5] = newData[7];
                    newData[7] = null;
                    newData[5].moved = true;
                }
            }
            newData[ind].moved = true;
            setKingPositions({
                white: kingPositions.white,
                black: [Math.floor(ind/8), ind%8]
            })
        } else if(newData[ind].piece === 'k' && moveDetails.move === 'w') {
            if(!(newData[ind].moved)) {
                if(ind == 58) {
                    newData[59] = newData[56];
                    newData[56] = null;
                    newData[59].moved = true;
                } else if(ind == 62) {
                    newData[61] = newData[63];
                    newData[63] = null;
                    newData[61].moved = true;
                }
            }
            newData[ind].moved = true;
            setKingPositions({
                white: [Math.floor(ind/8), ind%8],
                black: kingPositions.black
            })
        } else if(newData[ind].piece === 'p') {
            if(newData[ind].col === 'w' && Math.floor(ind/8) === 0) {
                newData[ind] = {
                    ind: newData[ind].ind,
                    col: "w",
                    piece: "q",
                    pic: "piecesPics/Chess_qlt45.svg"
                }
            } else if(newData[ind].col === 'b' && Math.floor(ind/8) === 7) {
                newData[ind] = {
                    ind: newData[ind].ind,
                    col: "b",
                    piece: "q",
                    pic: "piecesPics/Chess_qdt45.svg"
                }
            }
        }
        setData(newData);
        returnValuefromCheckForChecks = checkForChecks(newData, moveDetails.move);
        if(returnValuefromCheckForChecks.checks.length > 0) {
            if(checkForMate(newData, returnValuefromCheckForChecks)) {
                declareWinner(moveDetails.move === "w" ? "b" : "w");
                return;
            }
        }
        setMoveDetails({checks: returnValuefromCheckForChecks.checks, safeCells: returnValuefromCheckForChecks.safeCellsDupe, move: moveDetails.move === "b" ? "w" : "b" });
        setMoveOn(createMoveOnArray());
        setHighlight(null);
    }



    const findMoveAndUpdateMoveOn = (e, row, col, piece) => {
        // console.log(e.currentTarget);
        if(piece === null) return;
        if(!moveOn[(row*8)+col] && (moveDetails.move === piece.col)) {
            if(moveDetails.checks.length > 1) {
                if(piece.piece !== 'k') return;
            } else if(moveDetails.checks.length > 0) {
                console.log(moveDetails.checks);
            }
            setHighlight(row*8+col);
            changeMoveOn(row, col, piece);
        }
    }

    const elements = [];
    for(let i = 0; i < 8; i++) {
        elements.push(<Row key={i} row={i} />)
    }
    
    return (
        <FullContext.Provider value={{data, movePiece, moveOn, findMoveAndUpdateMoveOn, highlight}}>
        <ResignArea declareWinner={declareWinner} />
        <div className="mainBoard">
            {elements}
        </div>
        <Clock moveDetails={moveDetails} declareWinner={declareWinner} gameOver={gameOver}/>
        </FullContext.Provider>
    )
}

export default MainBoard