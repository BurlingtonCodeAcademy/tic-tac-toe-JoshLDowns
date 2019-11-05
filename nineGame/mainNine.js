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
//let timer;
//let count = 6;
//let noClick = [];
//let index;

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

class Board {
    constructor(element, boxesInside) {
        this.element = element;
        this.boxesInside = boxesInside;
    }
}
let gameA = new Board(document.getElementById("gameA"), boxArrayA);
let gameB = new Board(document.getElementById("gameB"), boxArrayB);
let gameC = new Board(document.getElementById("gameC"), boxArrayC);
let gameD = new Board(document.getElementById("gameD"), boxArrayD);
let gameE = new Board(document.getElementById("gameE"), boxArrayE);
let gameF = new Board(document.getElementById("gameF"), boxArrayF);
let gameG = new Board(document.getElementById("gameG"), boxArrayG);
let gameH = new Board(document.getElementById("gameH"), boxArrayH);
let gameI = new Board(document.getElementById("gameI"), boxArrayI);

let boardArray = [gameA, gameB, gameC, gameD, gameE, gameF, gameG, gameH, gameI];

boardLookUp = {
    'gameA' : gameA,
    'gameB' : gameB,
    'gameC' : gameC,
    'gameD' : gameD,
    'gameE' : gameE,
    'gameF' : gameF,
    'gameG' : gameG,
    'gameH' : gameH,
    'gameI' : gameI
}

let textDisplay = document.getElementById("textDisplay");  //sets event listener for status window
//let onePlayerGame = document.getElementById("start1p");
let twoPlayerGame = document.getElementById("start2p");

twoPlayerGame.addEventListener("click", () => {
    twoPlayerGame.disabled = true;
    //onePlayerGame.disabled = true;
    onePlayer = false;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    playerArray = [];
    //blockArray = [];
    turnCount = 0;
    currentPlayer = 'X';
    for (board of boardArray) {
        board.element.style.opacity = '.3';
    }
    gameE.element.style.opacity = '1';
    currentBoard = gameE;
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

function boxClick() {
    currentBox = boxLookUp[event.target.id];
    if (currentBox.clicked === false) {
        event.target.style.color = 'black';
        event.target.textContent = currentPlayer;
        currentBox.clicked = true;
        if (currentPlayer === 'X') {
            currentBox.xClick = true;
            playerClick();
        } else {
            currentBox.oClick = true;
            playerClick();
        }
        if (turnCount === 81) {
            for (box of boxes) {
                box.removeEventListener("click", boxClick);
            }
            twoPlayerGame.disabled = false;
            onePlayerGame.disabled = false;
            return textDisplay.textContent = `OH NO! It's a Draw!!!!`;
        }
    } else {
        textDisplay.textContent = `NO! Pick another one!`;
    }
}

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
                            currentBox = boxLookUp[currentBox.boardValue+num.toString()]
                            currentBox.element.style.backgroundColor = 'red';
                            currentBox.element.style.color = 'yellow';
                        }
                        for (box of boxes) {
                            box.removeEventListener("click", boxClick);
                        }
                        twoPlayerGame.disabled = false;
                        //onePlayerGame.disabled = false;
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
        currentBoard.element.style.opacity = '.3';
        for (obj of currentBoard.boxesInside) {
            obj.element.removeEventListener("click", boxClick);
        }
        currentBoard = boardLookUp[currentBox.moveValue];
        currentBoard.element.style.opacity = '1';
        for (obj of currentBoard.boxesInside) {
            obj.element.addEventListener("click", boxClick);
        }
        turnCount += 1;
        return textDisplay.textContent = `It is ${playerName}'s turn!`;
    } else {
        if (player === 'X') {
            currentPlayer = 'O';
            playerName = playerOName;
        } else {
            currentPlayer = 'X';
            playerName = playerXName;
        }
        currentBoard.element.style.opacity = '.3';
        for (obj of currentBoard.boxesInside) {
            obj.element.removeEventListener("click", boxClick);
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

//function ranNoClickBox() {
//    noClick = [];
//    for (obj of boxArray) {
//        if (obj.clicked === false) {
//            noClick.push(obj)
//        }
//    }
//    index = (Math.floor(Math.random() * noClick.length + 1) - 1);
//    noClick[index].clicked = true;
//    noClick[index].element.textContent = currentPlayer;
//    noClick[index].element.style.color = 'navy';
//    if (turnCount === 9) {
//        for (box of boxes) {
//            box.removeEventListener("click", boxClick);
//        }
//        subOneButton.disabled = false;
//        subTwoButton.disabled = false;
//        twoPlayerGame.disabled = false;
//        onePlayerGame.disabled = false;
//        clearInterval(timer);
//        count = 6;
//        return textDisplay.textContent = `OH NO! It's a Draw!!!!`;
//    }
//    if (currentPlayer === 'X') {
//        playerXClick();
//        if (onePlayer === true && turnCount !== 9) {
//            compMove = compBestMove();
//            compMove = compMove.toString();
//            currentBox = numBoxLookUp[compMove];
//            currentBox.element.style.color = 'black';
//            currentBox.element.textContent = currentPlayer;
//            currentBox.clicked = true;
//            playerOClick();
//        }
//    } else {
//        playerOClick();
//    }
//}

//timer countdown function
//function countDown() {
//    if (count === 0) {
//        ranNoClickBox();
//        clearInterval(countDown);
//    } else {
//        count = count - 1;
//        for (obj of boxArray) {
//            if (obj.clicked === false) {
//                obj.element.textContent = `${count}`;
//            }
//        }
//    }
//}