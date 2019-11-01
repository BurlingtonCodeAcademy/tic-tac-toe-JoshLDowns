let playerTurn = true;
let playerArrayX = [];
let playerArrayO = [];
let compArray = [];
let turnCount = 0;
let trueCountX = 0; 
let trueCountO = 0;
let mustBlock = false;
let blockArray = [];
let currentBox;
let playerXName = 'X';
let playerOName = 'O';
let currentPlayer = 'X';

let boxes = Array.from(document.getElementsByClassName("box"));

class Box {
    constructor(element) {
        this.element = element;
        this.clicked = false;
    }
}
let one = new Box(document.getElementById("one"));
let two = new Box(document.getElementById("two"));
let three = new Box(document.getElementById("three"));
let four = new Box(document.getElementById("four"));
let five = new Box(document.getElementById("five"));
let six = new Box(document.getElementById("six"));
let seven = new Box(document.getElementById("seven"));
let eight = new Box(document.getElementById("eight"));
let nine = new Box(document.getElementById("nine"));

boxArray = [one, two, three, four, five, six, seven, eight, nine];

let boxIDLookUp = {
    'one': one,
    'two': two,
    'three': three,
    'four': four,
    'five': five,
    'six': six,
    'seven': seven,
    'eight': eight,
    'nine': nine
}

let blockBoxLookUp = {
    '1' : one,
    '2' : two,
    '3' : three,
    '4' : four,
    '5' : five,
    '6' : six,
    '7' : seven,
    '8' : eight,
    '9' : nine
}

let boxNumLookUp = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}

let winningArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

let subOne = document.getElementById("subOne");
let subOneButton = document.getElementById("sub1");
subOne.addEventListener("submit", event => {
    event.preventDefault();
    playerXName = (event.target.querySelector('input').value).toString();
    subOneButton.disabled = true;
    })

let subTwo = document.getElementById("subTwo");
let subTwoButton = document.getElementById("sub2");
subTwo.addEventListener("submit", event => {
    event.preventDefault();
    playerOName = (event.target.querySelector('input').value);
    subTwoButton.disabled = true;
    })

let textDisplay = document.getElementById("textDisplay");
let onePlayerGame = document.getElementById("start1p");
let twoPlayerGame = document.getElementById("start2p")

twoPlayerGame.addEventListener("click", () => {
    twoPlayerGame.disabled = true;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    playerArrayO = [];
    playerArrayX = [];
    turnCount = 0;
    for (obj of boxArray) {
        obj.clicked = false;
    }
    for (box of boxes) {
        box.textContent = '';
        box.addEventListener("click", boxClick);
    }
});

function boxClick() {
    let boxNum = event.target.id;
    currentBox = boxIDLookUp[boxNum];
    if (playerTurn === true && currentBox.clicked === false) {
        event.target.textContent = currentPlayer;
        currentBox.clicked = true;
        if (currentPlayer === 'X') {
            playerArrayX.push(boxNumLookUp[boxNum]);
            playerXClick();
        } else {
            playerArrayO.push(boxNumLookUp[boxNum]);
            playerOClick();
        }
        //event.target.removeEventListener("click", boxClick);
        turnCount += 1;
        if (turnCount === 9) {
            for (box of boxes) {
                box.removeEventListener("click", boxClick);
            }
            subOneButton.disabled = false;
            subTwoButton.disabled = false;
            twoPlayerGame.disabled = false;
            return textDisplay.textContent = `OH NO! It's a Draw!!!!`;
        }
    } else {
        textDisplay.textContent = `NO! Pick another one!`;
    }
}

function playerXClick() {
    if (playerArrayX.length >= 3) {
        for (arr of winningArrays) {
            trueCountX = 0;
            for (let i = 0; i < playerArrayX.length; i++) {
                if (arr.includes(playerArrayX[i])) {
                    trueCountX = trueCountX + 1;
                    //if (trueCountX === 2) {
                        //mustBlock = true;
                        //blockArray.push(arr);
                    //}
                    if (trueCountX === 3) {
                        for (box of boxes) {
                            box.removeEventListener("click", boxClick);
                        }
                        subOneButton.disabled = false;
                        subTwoButton.disabled = false;
                        twoPlayerGame.disabled = false;
                        return textDisplay.textContent = `${playerXName} WINS!!!!`;
                    }
                }
            }
            //if (trueCountX === 3) {
            //    textDisplay.textContent = `Player X WINS!!!!`;
            //    for (box of boxes) {
            //        box.removeEventListener("click", boxClick);
            //    }
            //}
        }
        currentPlayer = 'O';
        return textDisplay.textContent = `It is ${playerOName}'s turn!`;
    } else {
    currentPlayer = 'O';
    return textDisplay.textContent = `It is ${playerOName}'s turn!`;
    }
}

function playerOClick() {
    if (playerArrayO.length >= 3) {
        for (arr of winningArrays) {
            trueCountO = 0;
            for (let i = 0; i < playerArrayO.length; i++) {
                if (arr.includes(playerArrayO[i])) {
                    trueCountO = trueCountO + 1;
                }
                if (trueCountO === 3) {
                    for (box of boxes) {
                        box.removeEventListener("click", boxClick);
                    }
                    subOneButton.disabled = false;
                    subTwoButton.disabled = false;
                    twoPlayerGame.disabled = false;
                    return textDisplay.textContent = `${playerOName} WINS!!!!`;
                }
            }
        }
        currentPlayer = 'X';
        return textDisplay.textContent = `It is ${playerXName}'s turn!`;
    } else {
    currentPlayer = 'X';
    return textDisplay.textContent = `It is ${playerXName}'s turn!`;
    }
}

//function compClick() {
//    if (mustBlock === true) {
//        for (element of blockArray) {
//            let blockBox = blockBoxLookUp[element.toString()];
//            if (blockBox.clicked === false) {
//                blockBox.element.textContent = "O";
//                return compArray.push(element);
//            }
//        }
//    } else if (turnCount === 0) {
//        one.clicked = true;
//        one.removeEventListener("click", boxClick);
//        currentBox = document.getElementById("one");
//        currentBox.textContent = "O";
//    } 
//}