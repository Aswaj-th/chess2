import React from 'react'
import Row from './Row';
import './mainboard.css'
import jsonData from '../pieces.json';
import { useState } from 'react';

const createData = () => {
    let arr = [];
    let j = 0;
    for(let i = 0; i < 64; i++) {
        if(i < 16) arr.push(jsonData[j++]);
        else if(i < 48) arr.push(null);
        else arr.push(jsonData[j++]);
    }
    //  console.log(arr);
    return arr;
}

const createMoveOnArray = () => {
    let arr = Array(64).fill(false, 0);
    //console.log(arr);
    return arr;
}

function MainBoard() {
    
    const [data, setData] = useState(createData());
    const [moveOn, setMoveOn] = useState(createMoveOnArray());
    const [moveDetails, setMoveDetails] = useState({
        move: "w",
        checks: []
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
                if(i === 1 && data[(i+2)*8+j] == null) {
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
                if(i === 6 && data[(i-2)*8+j] == null) {
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
        data.forEach((el, ind) => {
            if(el) {
                if(el.col === move) {
                    // console.log(el)
                    if(el.piece === 'r') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        while(i < 7) {
                            i++;
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
                        while(j < 7) {
                            j++;
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
                            if(j > 1 && data[(i-1)*8+j-2] != null && data[(i-1)*8+j-2].col !== move && data[(i-1)*8+j-2].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                            if(j < 6 && data[(i-1)*8+j+2] != null && data[(i-1)*8+j+2].col !== move && data[(i-1)*8+j+2].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                        }
                        if(i > 1) {
                            if(j > 0 && data[(i-2)*8+j-1] != null && data[(i-2)*8+j-1].col !== move && data[(i-2)*8+j-1].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                            if(j < 7 && data[(i-2)*8+j+1] != null && data[(i-2)*8+j+1].col !== move && data[(i-2)*8+j+1].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                        }
                        if(i < 6) {
                            if(j > 0 && data[(i+2)*8+j-1] != null && data[(i+2)*8+j-1].col !== move && data[(i+2)*8+j-1].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                            if(j < 7 && data[(i+2)*8+j+1] != null && data[(i+2)*8+j+1].col !== move && data[(i+2)*8+j+1].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                        }
                        if(i < 7) {
                            if(j > 1 && data[(i+1)*8+j-2] != null && data[(i+1)*8+j-2].col !== move && data[(i+1)*8+j-2].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                            if(j < 6 && data[(i+1)*8+j+2] != null && data[(i+1)*8+j+2].col !== move && data[(i+1)*8+j+2].piece === 'k') {
                                // console.log(el);
                                checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                            }
                        }
                    } else if(el.piece === 'p') {
                        let i = Math.floor(ind/8);
                        let j = ind%8;
                        if(el.col === 'w') {
                            if(i < 7) {
                                if(j < 7 && data[(i+1)*8+j+1] && data[(i+1)*8+j+1].col !== move && data[(i+1)*8+j+1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                                if(j > 0 && data[(i+1)*8+j-1] && data[(i+1)*8+j-1].col !== move && data[(i+1)*8+j-1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                        } else if(el.col === 'b') {
                            if(i > 0) {
                                if(j < 7 && data[(i-1)*8+j+1] && data[(i-1)*8+j+1].col !== move && data[(i-1)*8+j+1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                                if(j > 0 && data[(i-1)*8+j-1] && data[(i-1)*8+j-1].col !== move && data[(i-1)*8+j-1].piece === 'k') {
                                    // console.log(el);
                                    checks.push({el: el, i: Math.floor(ind/8), j: ind%8});
                                }
                            }
                        }
                    }
                }
            }
        })
        console.log("checks: "+checks.length);
        return checks;
    }

    const movePiece = (ind) => {
        const newData = [...data];
        newData[ind] = newData[highlight];
        newData[highlight] = null;
        if(checkForChecks(newData, moveDetails.move === 'w' ? 'b' : 'w').length > 0) {
            console.log("Illegal move");
            const newIllegals = {...illegals};
            newIllegals[moveDetails.move]++;
            if(newIllegals[moveDetails.move] > 2) {
                console.log(`Game over ${moveDetails.move} lost the game`);
                setData(createData());
                setMoveOn(createMoveOnArray());
                setMoveDetails({
                    move: "w",
                    checks: []
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
                return;
            }
            setIllegals(newIllegals);
            setHighlight(null);
            setMoveOn(createMoveOnArray());
            return;
        }
        if(newData[ind].piece === 'k' && moveDetails.move === 'b') {
            setKingPositions({
                white: kingPositions.white,
                black: [Math.floor(ind/8), ind%8]
            })
        } else if(newData[ind].piece === 'k' && moveDetails.move === 'w') {
            setKingPositions({
                white: [Math.floor(ind/8), ind%8],
                black: kingPositions.black
            })
        }
        setData(newData);
        setMoveDetails({checks: checkForChecks(newData, moveDetails.move), move: moveDetails.move === "b" ? "w" : "b" });
        setMoveOn(createMoveOnArray());
        setHighlight(null);
    }

    const handleCheck = () => {
        //let possibleMoves = [1, 2, 3, 4, 5, 6, 7, 8]
        return 0;
    }

    // const checkForCheckmate = () => {
    //     let possibleMoves = [];
    //     if(moveDetails.move === 'b') {
    //         if(kingPositions.black[0] > 0) {
    //             if(kingPositions.black[1] > 0) possibleMoves.push(1);
    //             possibleMoves.push(2);
    //             if(kingPositions.black[1] < 7) possibleMoves.push(3);
    //         }
    //         if(kingPositions.black[1] > 0) possibleMoves.push(4);
    //         if(kingPositions.black[1] < 7) possibleMoves.push(5);
    //         if(kingPositions.black[0] < 7) {
    //             if(kingPositions.black[1] > 0) possibleMoves.push(6);
    //             possibleMoves.push(7);
    //             if(kingPositions.black[1] < 7) possibleMoves.push(8);
    //         }
    //     } else if(moveDetails.move === 'w') {
    //         if(kingPositions.white[0] > 0) {
    //             if(kingPositions.white[1] > 0) possibleMoves.push(1);
    //             possibleMoves.push(2);
    //             if(kingPositions.white[1] < 7) possibleMoves.push(3);
    //         }
    //         if(kingPositions.white[1] > 0) possibleMoves.push(4);
    //         if(kingPositions.white[1] < 7) possibleMoves.push(5);
    //         if(kingPositions.white[0] < 7) {
    //             if(kingPositions.white[1] > 0) possibleMoves.push(6);
    //             possibleMoves.push(7);
    //             if(kingPositions.white[1] < 7) possibleMoves.push(8);
    //         }
    //     }
        
    // }

    const findMoveAndUpdate = (e, row, col, piece) => {
        // console.log(e.currentTarget);
        if(piece === null) return;
        if(!moveOn[(row*8)+col] && (moveDetails.move === piece.col)) {
            if(moveDetails.checks.length > 1) {
                if(piece.piece !== 'k') return;
            } else if(moveDetails.checks.length > 0) {
                console.log(moveDetails.checks);
                handleCheck();
            }
            setHighlight(row*8+col);
            changeMoveOn(row, col, piece);
        }
    }

    //console.log(jsonData);
    return (
        <div className="mainBoard">
            <Row row={0} data={data} movePiece={movePiece} moveOn={moveOn.slice(0, 8)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={1} data={data} movePiece={movePiece} moveOn={moveOn.slice(8, 16)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={2} data={data} movePiece={movePiece} moveOn={moveOn.slice(16, 24)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={3} data={data} movePiece={movePiece} moveOn={moveOn.slice(24, 32)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={4} data={data} movePiece={movePiece} moveOn={moveOn.slice(32, 40)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={5} data={data} movePiece={movePiece} moveOn={moveOn.slice(40, 48)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={6} data={data} movePiece={movePiece} moveOn={moveOn.slice(48, 56)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
            <Row row={7} data={data} movePiece={movePiece} moveOn={moveOn.slice(56)} findMoveAndUpdate={findMoveAndUpdate} highlight={highlight}/>
        </div>
    )
}

export default MainBoard