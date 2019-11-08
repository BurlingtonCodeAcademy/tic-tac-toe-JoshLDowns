let playerArray = [];
let turnCount = 0;
let trueCount = 0;
let currentBox;
let currentBoard;
let playerXName = 'X';
let playerOName = 'O';
let playerName;
let currentPlayer = 'X';
let player;
let winArray = [];
let totalCheck;
let boxCount;
let potentialMoves = [];
let tempMoves = [];
let blockArray = [];
let noClick = [];
let index;
let onePlayer;
let compMove;
//array of all divs to make setting event listeners easier
let boxes = Array.from(document.getElementsByClassName("box"));

class Box {  //each box is an object with an element to point to, a value, and a clicked boolean
    constructor(element, value, boardValue, moveValue) {
        this.element = element;
        this.value = value;
        this.boardValue = boardValue
        this.moveValue = moveValue;
        this.clicked = false;
        this.xClick = false;
        this.oClick = false;
    }
}
//box objects from class
let a1 = new Box(document.getElementById("a1"), 1, 'a', 'gameA');
let a2 = new Box(document.getElementById("a2"), 2, 'a', 'gameB');
let a3 = new Box(document.getElementById("a3"), 3, 'a', 'gameC');
let a4 = new Box(document.getElementById("a4"), 4, 'a', 'gameD');
let a5 = new Box(document.getElementById("a5"), 5, 'a', 'gameE');
let a6 = new Box(document.getElementById("a6"), 6, 'a', 'gameF');
let a7 = new Box(document.getElementById("a7"), 7, 'a', 'gameG');
let a8 = new Box(document.getElementById("a8"), 8, 'a', 'gameH');
let a9 = new Box(document.getElementById("a9"), 9, 'a', 'gameI');

let b1 = new Box(document.getElementById("b1"), 1, 'b', 'gameA');
let b2 = new Box(document.getElementById("b2"), 2, 'b', 'gameB');
let b3 = new Box(document.getElementById("b3"), 3, 'b', 'gameC');
let b4 = new Box(document.getElementById("b4"), 4, 'b', 'gameD');
let b5 = new Box(document.getElementById("b5"), 5, 'b', 'gameE');
let b6 = new Box(document.getElementById("b6"), 6, 'b', 'gameF');
let b7 = new Box(document.getElementById("b7"), 7, 'b', 'gameG');
let b8 = new Box(document.getElementById("b8"), 8, 'b', 'gameH');
let b9 = new Box(document.getElementById("b9"), 9, 'b', 'gameI');

let c1 = new Box(document.getElementById("c1"), 1, 'c', 'gameA');
let c2 = new Box(document.getElementById("c2"), 2, 'c', 'gameB');
let c3 = new Box(document.getElementById("c3"), 3, 'c', 'gameC');
let c4 = new Box(document.getElementById("c4"), 4, 'c', 'gameD');
let c5 = new Box(document.getElementById("c5"), 5, 'c', 'gameE');
let c6 = new Box(document.getElementById("c6"), 6, 'c', 'gameF');
let c7 = new Box(document.getElementById("c7"), 7, 'c', 'gameG');
let c8 = new Box(document.getElementById("c8"), 8, 'c', 'gameH');
let c9 = new Box(document.getElementById("c9"), 9, 'c', 'gameI');

let d1 = new Box(document.getElementById("d1"), 1, 'd', 'gameA');
let d2 = new Box(document.getElementById("d2"), 2, 'd', 'gameB');
let d3 = new Box(document.getElementById("d3"), 3, 'd', 'gameC');
let d4 = new Box(document.getElementById("d4"), 4, 'd', 'gameD');
let d5 = new Box(document.getElementById("d5"), 5, 'd', 'gameE');
let d6 = new Box(document.getElementById("d6"), 6, 'd', 'gameF');
let d7 = new Box(document.getElementById("d7"), 7, 'd', 'gameG');
let d8 = new Box(document.getElementById("d8"), 8, 'd', 'gameH');
let d9 = new Box(document.getElementById("d9"), 9, 'd', 'gameI');

let e1 = new Box(document.getElementById("e1"), 1, 'e', 'gameA');
let e2 = new Box(document.getElementById("e2"), 2, 'e', 'gameB');
let e3 = new Box(document.getElementById("e3"), 3, 'e', 'gameC');
let e4 = new Box(document.getElementById("e4"), 4, 'e', 'gameD');
let e5 = new Box(document.getElementById("e5"), 5, 'e', 'gameE');
let e6 = new Box(document.getElementById("e6"), 6, 'e', 'gameF');
let e7 = new Box(document.getElementById("e7"), 7, 'e', 'gameG');
let e8 = new Box(document.getElementById("e8"), 8, 'e', 'gameH');
let e9 = new Box(document.getElementById("e9"), 9, 'e', 'gameI');

let f1 = new Box(document.getElementById("f1"), 1, 'f', 'gameA');
let f2 = new Box(document.getElementById("f2"), 2, 'f', 'gameB');
let f3 = new Box(document.getElementById("f3"), 3, 'f', 'gameC');
let f4 = new Box(document.getElementById("f4"), 4, 'f', 'gameD');
let f5 = new Box(document.getElementById("f5"), 5, 'f', 'gameE');
let f6 = new Box(document.getElementById("f6"), 6, 'f', 'gameF');
let f7 = new Box(document.getElementById("f7"), 7, 'f', 'gameG');
let f8 = new Box(document.getElementById("f8"), 8, 'f', 'gameH');
let f9 = new Box(document.getElementById("f9"), 9, 'f', 'gameI');

let g1 = new Box(document.getElementById("g1"), 1, 'g', 'gameA');
let g2 = new Box(document.getElementById("g2"), 2, 'g', 'gameB');
let g3 = new Box(document.getElementById("g3"), 3, 'g', 'gameC');
let g4 = new Box(document.getElementById("g4"), 4, 'g', 'gameD');
let g5 = new Box(document.getElementById("g5"), 5, 'g', 'gameE');
let g6 = new Box(document.getElementById("g6"), 6, 'g', 'gameF');
let g7 = new Box(document.getElementById("g7"), 7, 'g', 'gameG');
let g8 = new Box(document.getElementById("g8"), 8, 'g', 'gameH');
let g9 = new Box(document.getElementById("g9"), 9, 'g', 'gameI');

let h1 = new Box(document.getElementById("h1"), 1, 'h', 'gameA');
let h2 = new Box(document.getElementById("h2"), 2, 'h', 'gameB');
let h3 = new Box(document.getElementById("h3"), 3, 'h', 'gameC');
let h4 = new Box(document.getElementById("h4"), 4, 'h', 'gameD');
let h5 = new Box(document.getElementById("h5"), 5, 'h', 'gameE');
let h6 = new Box(document.getElementById("h6"), 6, 'h', 'gameF');
let h7 = new Box(document.getElementById("h7"), 7, 'h', 'gameG');
let h8 = new Box(document.getElementById("h8"), 8, 'h', 'gameH');
let h9 = new Box(document.getElementById("h9"), 9, 'h', 'gameI');

let i1 = new Box(document.getElementById("i1"), 1, 'i', 'gameA');
let i2 = new Box(document.getElementById("i2"), 2, 'i', 'gameB');
let i3 = new Box(document.getElementById("i3"), 3, 'i', 'gameC');
let i4 = new Box(document.getElementById("i4"), 4, 'i', 'gameD');
let i5 = new Box(document.getElementById("i5"), 5, 'i', 'gameE');
let i6 = new Box(document.getElementById("i6"), 6, 'i', 'gameF');
let i7 = new Box(document.getElementById("i7"), 7, 'i', 'gameG');
let i8 = new Box(document.getElementById("i8"), 8, 'i', 'gameH');
let i9 = new Box(document.getElementById("i9"), 9, 'i', 'gameI');
//box look up table
let boxLookUp = {
    "a1": a1,
    "a2": a2,
    "a3": a3,
    "a4": a4,
    "a5": a5,
    "a6": a6,
    "a7": a7,
    "a8": a8,
    "a9": a9,
    "b1": b1,
    "b2": b2,
    "b3": b3,
    "b4": b4,
    "b5": b5,
    "b6": b6,
    "b7": b7,
    "b8": b8,
    "b9": b9,
    "c1": c1,
    "c2": c2,
    "c3": c3,
    "c4": c4,
    "c5": c5,
    "c6": c6,
    "c7": c7,
    "c8": c8,
    "c9": c9,
    "d1": d1,
    "d2": d2,
    "d3": d3,
    "d4": d4,
    "d5": d5,
    "d6": d6,
    "d7": d7,
    "d8": d8,
    "d9": d9,
    "e1": e1,
    "e2": e2,
    "e3": e3,
    "e4": e4,
    "e5": e5,
    "e6": e6,
    "e7": e7,
    "e8": e8,
    "e9": e9,
    "f1": f1,
    "f2": f2,
    "f3": f3,
    "f4": f4,
    "f5": f5,
    "f6": f6,
    "f7": f7,
    "f8": f8,
    "f9": f9,
    "g1": g1,
    "g2": g2,
    "g3": g3,
    "g4": g4,
    "g5": g5,
    "g6": g6,
    "g7": g7,
    "g8": g8,
    "g9": g9,
    "h1": h1,
    "h2": h2,
    "h3": h3,
    "h4": h4,
    "h5": h5,
    "h6": h6,
    "h7": h7,
    "h8": h8,
    "h9": h9,
    "i1": i1,
    "i2": i2,
    "i3": i3,
    "i4": i4,
    "i5": i5,
    "i6": i6,
    "i7": i7,
    "i8": i8,
    "i9": i9
}

let winningArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
//various box arrays for refrencing and iterating
let boxArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, b1, b2, b3, b4, b5, b6, b7, b8, b9, c1, c2, c3, c4, c5, c6, c7, c8, c9, d1, d2, d3, d4, d5, d6, d7, d8, d9, e1, e2, e3, e4, e5, e6, e7, e8, e9, f1, f2, f3, f4, f5, f6, f7, f8, f9, g1, g2, g3, g4, g5, g6, g7, g8, g9, h1, h2, h3, h4, h5, h6, h7, h8, h9, i1, i2, i3, i4, i5, i6, i7, i8, i9]
let boxArrayA = [a1, a2, a3, a4, a5, a6, a7, a8, a9];
let boxArrayB = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
let boxArrayC = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
let boxArrayD = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
let boxArrayE = [e1, e2, e3, e4, e5, e6, e7, e8, e9];
let boxArrayF = [f1, f2, f3, f4, f5, f6, f7, f8, f9];
let boxArrayG = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
let boxArrayH = [h1, h2, h3, h4, h5, h6, h7, h8, h9];
let boxArrayI = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
//board class, each board has an element to refrence, and array of the included box objects, a tag and number for reference, and a boolean to determine if all boxes are clicked
class Board {
    constructor(element, boxesInside, tag, boardNumber) {
        this.element = element;
        this.boxesInside = boxesInside;
        this.tag = tag;
        this.boardNumber = boardNumber;
        this.full = false;
    }
}
//board objects
let gameA = new Board(document.getElementById("gameA"), boxArrayA, 'a', 1);
let gameB = new Board(document.getElementById("gameB"), boxArrayB, 'b', 2);
let gameC = new Board(document.getElementById("gameC"), boxArrayC, 'c', 3);
let gameD = new Board(document.getElementById("gameD"), boxArrayD, 'd', 4);
let gameE = new Board(document.getElementById("gameE"), boxArrayE, 'e', 5);
let gameF = new Board(document.getElementById("gameF"), boxArrayF, 'f', 6);
let gameG = new Board(document.getElementById("gameG"), boxArrayG, 'g', 7);
let gameH = new Board(document.getElementById("gameH"), boxArrayH, 'h', 8);
let gameI = new Board(document.getElementById("gameI"), boxArrayI, 'i', 9);

let boardArray = [gameA, gameB, gameC, gameD, gameE, gameF, gameG, gameH, gameI];
//board look up table
boardLookUp = {
    'gameA': gameA,
    'gameB': gameB,
    'gameC': gameC,
    'gameD': gameD,
    'gameE': gameE,
    'gameF': gameF,
    'gameG': gameG,
    'gameH': gameH,
    'gameI': gameI
}

let textDisplay = document.getElementById("textDisplay");  //sets target for status window
let onePlayerGame = document.getElementById("start1p");  //sets target for one player button
let twoPlayerGame = document.getElementById("start2p");  //sets target for two player button
//one player click event listener
onePlayerGame.addEventListener("click", () => {
    twoPlayerGame.disabled = true;
    onePlayerGame.disabled = true;
    onePlayer = true;
    playerOName = 'Computer';
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    playerArray = [];
    blockArray = [];
    turnCount = 0;
    currentPlayer = 'X';
    for (board of boardArray) {
        board.element.style.opacity = '.3';
    }
    gameE.element.style.opacity = '1';
    currentBoard = gameE;
    for (obj of boardArray) {
        obj.full = false;
    }
    for (obj of boxArray) {
        obj.clicked = false;
        obj.xClick = false;
        obj.oClick = false;
        obj.element.textContent = '';
        obj.element.style.color = 'red';
        obj.element.style.backgroundColor = 'orange';
    }
    for (obj of boxArrayE) {
        obj.element.addEventListener("click", boxClick);
    }
})
//two player click event listener
twoPlayerGame.addEventListener("click", () => {
    twoPlayerGame.disabled = true;
    onePlayerGame.disabled = true;
    onePlayer = false;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    playerArray = [];
    blockArray = [];
    turnCount = 0;
    currentPlayer = 'X';
    for (board of boardArray) {
        board.element.style.opacity = '.3';
    }
    gameE.element.style.opacity = '1';
    currentBoard = gameE;
    for (obj of boardArray) {
        obj.full = false;
    }
    for (obj of boxArray) {
        obj.clicked = false;
        obj.xClick = false;
        obj.oClick = false;
        obj.element.textContent = '';
        obj.element.style.color = 'red';
        obj.element.style.backgroundColor = 'orange';
    }
    for (obj of boxArrayE) {
        obj.element.addEventListener("click", boxClick);
    }
});
//function that handles boxes being clicked
function boxClick() {
    currentBox = boxLookUp[event.target.id];
    currentBoard = boardLookUp[`game${currentBox.boardValue.toUpperCase()}`];
    if (currentBox.clicked === false) {
        event.target.style.color = 'black';
        event.target.textContent = currentPlayer;
        currentBox.clicked = true;
        totalCheck = 0;
        for (box of currentBoard.boxesInside) {
            if (box.clicked === true) {
                totalCheck += 1;
            }
        }
        if (totalCheck === 9) {
            currentBoard.full = true;
        }
        if (currentPlayer === 'X') {
            currentBox.xClick = true;
            playerClick();
            if (onePlayer === true) {
                compMove = compBestMove();
                currentBox = boxLookUp[`${currentBoard.tag}${compMove}`]
                currentBox.element.style.color = 'black';
                currentBox.element.textContent = currentPlayer;
                currentBox.clicked = true;
                currentBox.oClick = true;
                playerClick();
            }
        } else {
            currentBox.oClick = true;
            playerClick();
        }
        if (turnCount === 81) {
            for (box of boxes) {
                box.removeEventListener("click", boxClick);
            }
            twoPlayerGame.disabled = false;
            //onePlayerGame.disabled = false;
            return textDisplay.textContent = `OH NO! It's a Draw!!!!`;
        }
    } else {
        textDisplay.textContent = `NO! Pick another one!`;
    }
}
//called on click, determines player, checks if they win, switches boards when needed
function playerClick() {
    player = currentPlayer;
    if (player === 'X') {
        playerArray = [];
        for (obj of currentBoard.boxesInside) {
            if (obj.xClick === true) {
                playerArray.push(obj.value);
            }
        }
        playerName = playerXName;
    } else {
        playerArray = [];
        for (obj of currentBoard.boxesInside) {
            if (obj.oClick === true) {
                playerArray.push(obj.value);
            }
        }
        playerName = playerOName;
    }
    if (playerArray.length >= 3) {
        for (arr of winningArrays) {
            trueCount = 0;
            for (let i = 0; i < playerArray.length; i++) {
                if (arr.includes(playerArray[i])) {
                    trueCount = trueCount + 1;
                    if (trueCount === 3) {
                        for (num of arr) {
                            currentBox = boxLookUp[currentBox.boardValue + num.toString()]
                            currentBox.element.style.backgroundColor = 'red';
                            currentBox.element.style.color = 'yellow';
                        }
                        for (box of boxes) {
                            box.removeEventListener("click", boxClick);
                        }
                        twoPlayerGame.disabled = false;
                        onePlayerGame.disabled = false;
                        for (obj of boxArray) {
                            if (obj.clicked === false) {
                                obj.element.textContent = ``;
                            }
                        }
                        return textDisplay.textContent = `${playerName} WINS!!!!`;
                    }
                }
            }
        }
        if (player === 'X') {
            currentPlayer = 'O';
            playerName = playerOName;
        } else {
            currentPlayer = 'X';
            playerName = playerXName;
        }
        if (boardLookUp[currentBox.moveValue].full === true) {
            for (obj of boardArray) {
                if (obj.full === false) {
                    for (box of obj.boxesInside) {
                        box.element.addEventListener("click", boxClick);
                    }
                    obj.element.style.opacity = '1';
                } else {
                    for (box of obj.boxesInside) {
                        box.element.removeEventListener("click", boxClick);
                    }
                    obj.element.style.opacity = '.3';
                }
            }
            turnCount += 1;
            return textDisplay.textContent = `It is ${playerName}'s turn!`;
        } else {
            for (obj of boardArray) {
                obj.element.style.opacity = '.3';
                for (box of obj.boxesInside) {
                    box.element.removeEventListener("click", boxClick);
                }
            }
            currentBoard = boardLookUp[currentBox.moveValue];
            currentBoard.element.style.opacity = '1';
            for (obj of currentBoard.boxesInside) {
                obj.element.addEventListener("click", boxClick);
            }
            turnCount += 1;
            return textDisplay.textContent = `It is ${playerName}'s turn!`;
        }
    } else {
        if (player === 'X') {
            currentPlayer = 'O';
            playerName = playerOName;
        } else {
            currentPlayer = 'X';
            playerName = playerXName;
        }
        if (boardLookUp[currentBox.moveValue].full === true) {
            for (obj of boardArray) {
                if (obj.full === false) {
                    for (box of obj.boxesInside) {
                        box.element.addEventListener("click", boxClick);
                    }
                    obj.element.style.opacity = '1';
                } else {
                    for (box of obj.boxesInside) {
                        box.element.removeEventListener("click", boxClick);
                    }
                    obj.element.style.opacity = '.3';
                }
            }
            turnCount += 1;
            return textDisplay.textContent = `It is ${playerName}'s turn!`;
        } else {
            for (obj of boardArray) {
                obj.element.style.opacity = '.3';
                for (box of obj.boxesInside) {
                    box.element.removeEventListener("click", boxClick);
                }
            }
            currentBoard = boardLookUp[currentBox.moveValue];
            currentBoard.element.style.opacity = '1';
            for (obj of currentBoard.boxesInside) {
                obj.element.addEventListener("click", boxClick);
            }
            turnCount += 1;
            return textDisplay.textContent = `It is ${playerName}'s turn!`;
        }
    }
}
//determines if computer player can win
function canWin() {
    winArray = [];
    playerArray = [];
    for (obj of currentBoard.boxesInside) {
        if (obj.oClick === true) {
            playerArray.push(obj.value);
        }
    }
    for (arr of winningArrays) {
        trueCount = 0;
        for (let i = 0; i < playerArray.length; i++) {
            if (arr.includes(playerArray[i])) {
                trueCount = trueCount + 1;
            }
            if (trueCount === 2) {
                winArray.push(arr);
            }
        }
    }
    if (winArray.length > 0) {
        for (arr of winArray) {
            for (item of arr) {
                if (boxLookUp[`${currentBoard.tag}${item.toString()}`].clicked === false) {
                    return item;
                }
            }
        }
    } else {
        return false;
    }
    return false;
}
//determines if opponent can win on target board
function opCanWin(board) {
    winArray = [];
    playerArray = [];
    for (obj of board.boxesInside) {
        if (obj.xClick === true) {
            playerArray.push(obj.value);
        }
    }
    for (arr of winningArrays) {
        trueCount = 0;
        for (let i = 0; i < playerArray.length; i++) {
            if (arr.includes(playerArray[i])) {
                trueCount = trueCount + 1;
            }
            if (trueCount === 2) {
                winArray.push(arr);
            }
        }
    }
    if (winArray.length > 0) {
        for (arr of winArray) {
            for (item of arr) {
                if (boxLookUp[`${board.tag}${item.toString()}`].clicked === false) {
                    return true;
                }
            }
        }
    } else {
        return false;
    }
    return false;
}
//determines if computer can set up a win on current board
function setUpWin() {
    let setUpArray = [];
    let notClicked = 0;
    playerArray = [];
    for (obj of currentBoard.boxesInside) {
        if (obj.oClick === true) {
            playerArray.push(obj.value);
        }
    }
    for (arr of winningArrays) {
        trueCount = 0;
        for (let i = 0; i < playerArray.length; i++) {
            if (arr.includes(playerArray[i])) {
                trueCount = trueCount + 1;
            }
            if (trueCount === 1) {
                setUpArray.push(arr);
            }
        }
    }
    if (setUpArray.length > 0) {
        for (arr of setUpArray) {
            notClicked = 0;
            for (num of arr) {
                if (boxLookUp[`${currentBoard.tag}${num.toString()}`].clicked === false) {
                    notClicked += 1;
                }
                if (notClicked === 2) {
                    if (boxLookUp[[`${currentBoard.tag}${arr[0].toString()}`]].clicked === false) {
                        return arr[0];
                    } else {
                        return arr[1];
                    }
                }
            }
        }
    } else {
        return false;
    }
    return false;
}
//determines if computer has a win set up on target board
function haveSetUp(board) {
    winArray = [];
    playerArray = [];
    for (obj of board.boxesInside) {
        if (obj.oClick === true) {
            playerArray.push(obj.value);
        }
    }
    for (arr of winningArrays) {
        trueCount = 0;
        for (let i = 0; i < playerArray.length; i++) {
            if (arr.includes(playerArray[i])) {
                trueCount = trueCount + 1;
            }
            if (trueCount === 2) {
                winArray.push(arr);
            }
        }
    }
    if (winArray.length > 0) {
        for (arr of winArray) {
            for (item of arr) {
                if (boxLookUp[`${board.tag}${item.toString()}`].clicked === false) {
                    return true;
                }
            }
        }
    } else {
        return false;
    }
    return false;
}
//determines if the computer must make a block in current board
function mustBlock() {
    playerArray = [];
    for (obj of currentBoard.boxesInside) {
        if (obj.xClick === true) {
            playerArray.push(obj.value);
        }
    }
    for (arr of winningArrays) {
        trueCount = 0;
        for (let i = 0; i < playerArray.length; i++) {
            if (arr.includes(playerArray[i])) {
                trueCount = trueCount + 1;
            }
            if (trueCount === 2) {
                blockArray.push(arr);
            }
        }
    }
    if (blockArray.length > 0) {
        for (arr of blockArray) {
            for (item of arr) {
                if (boxLookUp[`${currentBoard.tag}${item.toString()}`].clicked === false) {
                    return item;
                }
            }
        }
    } else {
        return false;
    }
    return false;
}
//determines the computers best move(kinda... need to research minimax functions to rewrite this section... right now the game plays but is easily won)
function compBestMove() {
    potentialMoves = [];
    boxCount = 0;
    let win = canWin();
    let setUp = setUpWin();
    let block = mustBlock();
    let opWin;
    let hasSetUp;
    noClick = [];
    for (obj of currentBoard.boxesInside) { //determintes which boxes are not clicked in current board
        if (obj.clicked === false) {
            noClick.push(obj)
        }
    }
    for (board of boardArray) {  //determines if there are any boards with no moves and puts them into potential moves array
        boxCount = 0;
        if (board.tag !== currentBoard.tag) {
            for (box of board.boxesInside) {
                if (box.clicked === false) {
                    boxCount += 1;
                }
            }
            if (boxCount === 9) {
                potentialMoves.push(board.boardNumber);
            }
        }
    }
    let noClickValues = noClick.map((a) => a = a.value); //creates an array of box values from the noClicked array
    for (move of potentialMoves) {  //removes any clicked boxes that might have been missed from the potential moves array
        if (!noClickValues.includes(move)) {
            potentialMoves.splice(potentialMoves.indexOf(move), 1);
        }
    }
    if (win && noClickValues.includes(win)) { //if computer has a win it will make that move
        return win;
    }
    if (potentialMoves.length > 0) {  //if there is an open box it makes move that will send to open board, and try to play efficiently in current board
        if (setUp && potentialMoves.includes(setUp)) { //checks if it can make a set up move in current board
            return setUp;
        } else if (block && potentialMoves.includes(block)) { //checks if it can make a block in current board
            return block;
        } else {
            return potentialMoves[0]; //returns first available open board if no better move is available
        }
    }
    potentialMoves = [];
    for (board of boardArray) {  //if no open boards, checks each board to see if player can win, sets potential moves to safe moves
        opWin = opCanWin(board);
        if (opWin === false) {
            potentialMoves.push(board.boardNumber);
        }
    }
    console.log(potentialMoves);
    console.log(noClickValues);
    for (move of potentialMoves) { //removes any clicked boxes that might have been missed from potential moves array
        if (!noClickValues.includes(move)) {
            potentialMoves.splice(potentialMoves.indexOf(move), 1);
        }
    }
    console.log(potentialMoves);
    if (potentialMoves.length > 0) {  
        tempMoves = potentialMoves;
        for (board of boardArray) {  //attempts to not send to a board where opponent can block a win
            hasSetUp = haveSetUp(board);
            if (hasSetUp === true && potentialMoves.includes(board.boardNumber)) {
                potentialMoves.splice(board.boardNumber, 1)
            }
        }
        if (potentialMoves.length > 0) {
            if (setUp && potentialMoves.includes(setUp)) {  //checks if it can make a set up move in current board
                return setUp;
            } else if (block && potentialMoves.includes(block)) {  //checks if it can make a block in current board
                return block;
            } else {
                return potentialMoves[0];  //returns first available move if no better move is available
            }
        } else {
            potentialMoves = tempMoves;  //makes move with remaining potential moves, trying to avoid setting up a loss
            if (setUp && potentialMoves.includes(setUp)) {  //checks if it can make a set up move in current board
                return setUp;
            } else if (block && potentialMoves.includes(block)) {  //checks if it can make a block in current board
                return block;
            } else {
                return potentialMoves[0];  //returns first available move if no better move is available
            }
        }
    } else {
        console.log(noClickValues[(Math.floor(Math.random() * noClickValues.length + 1) - 1)]);
        return noClickValues[(Math.floor(Math.random() * noClickValues.length + 1) - 1)];
    }
}