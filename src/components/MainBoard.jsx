import React from 'react'
import Row from './Row';
import Clock from './Clock';
import './mainboard.css'
import jsonData from '../pieces.json';
import { useState, useContext, createContext } from 'react';

export const FullContext = createContext();
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
                    console.log(data[i*8+j])
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                            if(j < 6) {
                                safeCellsDupe[(i-1)*8+j+2] = false;
                                if(data[(i-1)*8+j+2] != null && data[(i-1)*8+j+2].col !== move && data[(i-1)*8+j+2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                        }
                        if(i > 1) {
                            if(j > 0) {
                                safeCellsDupe[(i-2)*8+j-1] = false;
                                if(data[(i-2)*8+j-1] != null && data[(i-2)*8+j-1].col !== move && data[(i-2)*8+j-1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                            if(j < 7) {
                                safeCellsDupe[(i-2)*8+j+1] = false;
                                if(data[(i-2)*8+j+1] != null && data[(i-2)*8+j+1].col !== move && data[(i-2)*8+j+1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                        }
                        if(i < 6) {
                            if(j > 0) {
                                safeCellsDupe[(i+2)*8+j-1] = false;
                                if(data[(i+2)*8+j-1] != null && data[(i+2)*8+j-1].col !== move && data[(i+2)*8+j-1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                            if(j < 7) {
                                safeCellsDupe[(i+2)*8+j+1] = false;
                                if(data[(i+2)*8+j+1] != null && data[(i+2)*8+j+1].col !== move && data[(i+2)*8+j+1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                        }
                        if(i < 7) {
                            if(j > 1) {
                                safeCellsDupe[(i+1)*8+j-2] = false;
                                if(data[(i+1)*8+j-2] != null && data[(i+1)*8+j-2].col !== move && data[(i+1)*8+j-2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                            if(j < 6) {
                                safeCellsDupe[(i+1)*8+j+2] = false;
                                if(data[(i+1)*8+j+2] != null && data[(i+1)*8+j+2].col !== move && data[(i+1)*8+j+2].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                        }
                    } else if(el.piece === 'p') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        if(el.col === 'w') {
                            if(i < 7) {
                                if(j < 7) {
                                    safeCellsDupe[(i+1)*8+j+1] = false;
                                    if(data[(i+1)*8+j+1] && data[(i+1)*8+j+1].col !== move && data[(i+1)*8+j+1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                    }
                                }
                                if(j > 0) {
                                    safeCellsDupe[(i+1)*8+j-1] = false;
                                    if(data[(i+1)*8+j-1] && data[(i+1)*8+j-1].col !== move && data[(i+1)*8+j-1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                    }
                                }
                            }
                        } else if(el.col === 'b') {
                            if(i > 0) {
                                if(j < 7) {
                                    safeCellsDupe[(i-1)*8+j+1] = false;
                                    if(data[(i-1)*8+j+1] && data[(i-1)*8+j+1].col !== move && data[(i-1)*8+j+1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                    }
                                }
                                if(j > 0) {
                                    safeCellsDupe[(i-1)*8+j-1] = false;
                                    if(data[(i-1)*8+j-1] && data[(i-1)*8+j-1].col !== move && data[(i-1)*8+j-1].piece === 'k') {
                                        // console.log(el);
                                        checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
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
        }
        setData(newData);
        returnValuefromCheckForChecks = checkForChecks(newData, moveDetails.move);
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
        <div className="mainBoard">
            {elements}
        </div>
        <Clock moveDetails={moveDetails} declareWinner={declareWinner} />
        </FullContext.Provider>
    )
}

export default MainBoard