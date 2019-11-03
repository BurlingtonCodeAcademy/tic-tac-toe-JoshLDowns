let playerArrayX = [];
let playerArrayO = [];
let turnCount = 0;
let trueCountX = 0;
let trueCountO = 0;
let blockArray = [];
let currentBox;
let playerXName = 'X';
let playerOName = 'O';
let currentPlayer = 'X';
let timer;
let count = 6;
let noClick = [];
let index;
let onePlayer = false;
let compMove;

let boxes = Array.from(document.getElementsByClassName("box"));

class Box {
    constructor(element, value) {
        this.element = element;
        this.value = value;
        this.clicked = false;
    }
}
let one = new Box(document.getElementById("one"), 1);
let two = new Box(document.getElementById("two"), 2);
let three = new Box(document.getElementById("three"), 3);
let four = new Box(document.getElementById("four"), 4);
let five = new Box(document.getElementById("five"), 5);
let six = new Box(document.getElementById("six"), 6);
let seven = new Box(document.getElementById("seven"), 7);
let eight = new Box(document.getElementById("eight"), 8);
let nine = new Box(document.getElementById("nine"), 9);

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

let numBoxLookUp = {
    '1': one,
    '2': two,
    '3': three,
    '4': four,
    '5': five,
    '6': six,
    '7': seven,
    '8': eight,
    '9': nine
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
    if (playerXName === '') {
        playerXName = 'X';
    }
    subOneButton.disabled = true;
})

let subTwo = document.getElementById("subTwo");
let subTwoButton = document.getElementById("sub2");
subTwo.addEventListener("submit", event => {
    event.preventDefault();
    playerOName = (event.target.querySelector('input').value);
    if (playerOName === '') {
        playerOName = 'O';
    }
    subTwoButton.disabled = true;
})

let textDisplay = document.getElementById("textDisplay");
let onePlayerGame = document.getElementById("start1p");
let twoPlayerGame = document.getElementById("start2p");

onePlayerGame.addEventListener("click", () => {
    onePlayer = true;
    playerOName = 'Computer';
    twoPlayerGame.disabled = true;
    onePlayerGame.disabled = true;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    timer = setInterval(countDown, 1000);;
    playerArrayO = [];
    playerArrayX = [];
    blockArray = [];
    turnCount = 0;
    trueCountO = 0;
    trueCountX = 0;
    currentPlayer = 'X';
    for (obj of boxArray) {
        obj.clicked = false;
        obj.element.style.color = 'red';
        obj.element.style.backgroundColor = 'orange';
    }
    for (box of boxes) {
        box.textContent = '';
        box.addEventListener("click", boxClick);
    }
});

twoPlayerGame.addEventListener("click", () => {
    twoPlayerGame.disabled = true;
    onePlayerGame.disabled = true;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    timer = setInterval(countDown, 1000);;
    playerArrayO = [];
    playerArrayX = [];
    blockArray = [];
    turnCount = 0;
    trueCountO = 0;
    trueCountX = 0;
    currentPlayer = 'X';
    for (obj of boxArray) {
        obj.clicked = false;
        obj.element.style.color = 'red';
        obj.element.style.backgroundColor = 'orange';
    }
    for (box of boxes) {
        box.textContent = '';
        box.addEventListener("click", boxClick);
    }
});

function boxClick() {
    let boxNum = event.target.id;
    currentBox = boxIDLookUp[boxNum];
    if (currentBox.clicked === false) {
        event.target.style.color = 'black';
        event.target.textContent = currentPlayer;
        currentBox.clicked = true;
        if (currentPlayer === 'X') {
            playerArrayX.push(boxNumLookUp[boxNum]);
            playerXClick();
            if (onePlayer === true && turnCount !== 9) {
                compMove = compBestMove();
                playerArrayO.push(compMove);
                compMove = compMove.toString();
                currentBox = numBoxLookUp[compMove];
                currentBox.element.style.color = 'black';
                currentBox.element.textContent = currentPlayer;
                currentBox.clicked = true;
                playerOClick();
            }

        } else {
            playerArrayO.push(boxNumLookUp[boxNum]);
            playerOClick();
        }
        if (turnCount === 9) {
            for (box of boxes) {
                box.removeEventListener("click", boxClick);
            }
            subOneButton.disabled = false;
            subTwoButton.disabled = false;
            twoPlayerGame.disabled = false;
            onePlayerGame.disabled = false;
            clearInterval(timer);
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
                    if (trueCountX === 3) {
                        for (num of arr) {
                            numBoxLookUp[num.toString()].element.style.backgroundColor = 'red';
                            numBoxLookUp[num.toString()].element.style.color = 'yellow';
                        }
                        for (box of boxes) {
                            box.removeEventListener("click", boxClick);
                        }
                        subOneButton.disabled = false;
                        subTwoButton.disabled = false;
                        twoPlayerGame.disabled = false;
                        onePlayerGame.disabled = false;
                        clearInterval(timer);
                        count = 6;
                        for (obj of boxArray) {
                            if (obj.clicked === false) {
                                obj.element.textContent = ``;
                            }
                        }
                        return textDisplay.textContent = `${playerXName} WINS!!!!`;
                    }
                }
            }
        }
        currentPlayer = 'O';
        clearInterval(timer);
        count = 6;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = ``;
            }
        }
        timer = setInterval(countDown, 1000);
        turnCount += 1;
        return textDisplay.textContent = `It is ${playerOName}'s turn!`;
    } else {
        currentPlayer = 'O';
        clearInterval(timer);
        count = 6;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = ``;
            }
        }
        timer = setInterval(countDown, 1000);
        turnCount += 1;
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
                    for (num of arr) {
                        numBoxLookUp[num.toString()].element.style.backgroundColor = 'red';
                        numBoxLookUp[num.toString()].element.style.color = 'yellow';
                    }
                    for (box of boxes) {
                        box.removeEventListener("click", boxClick);
                    }
                    subOneButton.disabled = false;
                    subTwoButton.disabled = false;
                    twoPlayerGame.disabled = false;
                    onePlayerGame.disabled = false;
                    clearInterval(timer);
                    count = 6;
                    for (obj of boxArray) {
                        if (obj.clicked === false) {
                            obj.element.textContent = ``;
                        }
                    }
                    return textDisplay.textContent = `${playerOName} WINS!!!!`;
                }
            }
        }
        currentPlayer = 'X';
        clearInterval(timer);
        count = 6;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = ``;
            }
        }
        timer = setInterval(countDown, 1000);
        turnCount += 1;
        return textDisplay.textContent = `It is ${playerXName}'s turn!`;
    } else {
        currentPlayer = 'X';
        clearInterval(timer);
        count = 6;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = ``;
            }
        }
        timer = setInterval(countDown, 1000);
        turnCount += 1;
        return textDisplay.textContent = `It is ${playerXName}'s turn!`;
    }
}

function ranNoClickBox() {
    noClick = [];
    for (obj of boxArray) {
        if (obj.clicked === false) {
            noClick.push(obj)
        }
    }
    index = (Math.floor(Math.random() * noClick.length + 1) - 1);
    noClick[index].clicked = true;
    noClick[index].element.textContent = currentPlayer;
    noClick[index].element.style.color = 'navy';
    if (turnCount === 9) {
        for (box of boxes) {
            box.removeEventListener("click", boxClick);
        }
        subOneButton.disabled = false;
        subTwoButton.disabled = false;
        twoPlayerGame.disabled = false;
        onePlayerGame.disabled = false;
        clearInterval(timer);
        count = 6;
        return textDisplay.textContent = `OH NO! It's a Draw!!!!`;
    }
    if (currentPlayer === 'X') {
        playerArrayX.push(noClick[index].value);
        playerXClick();
        if (onePlayer === true && turnCount !== 9) {
            compMove = compBestMove();
            playerArrayO.push(compMove);
            compMove = compMove.toString();
            currentBox = numBoxLookUp[compMove];
            currentBox.element.style.color = 'black';
            currentBox.element.textContent = currentPlayer;
            currentBox.clicked = true;
            playerOClick();
        }
    } else {
        playerArrayO.push(noClick[index].value);
        playerOClick();
    }
}

function countDown() {
    if (count === 0) {
        ranNoClickBox();
        clearInterval(countDown);
    } else {
        count = count - 1;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = `${count}`;
            }
        }
    }
}

function canWin() {
    let winArray = [];
    for (arr of winningArrays) {
        trueCountO = 0;
        for (let i = 0; i < playerArrayX.length; i++) {
            if (arr.includes(playerArrayO[i])) {
                trueCountO = trueCountO + 1;
            }
            if (trueCountO === 2) {
                winArray.push(arr);
            }
        }
    }
    if (winArray.length > 0) { //checks if computer has win and sets that move
        for (arr of winArray) {
            for (item of arr) {
                if (numBoxLookUp[item.toString()].clicked === false) {
                    return item;
                }
            }
        }
    } else {
        return false;
    }
    return false;
}

function mustBlock() {
    for (arr of winningArrays) {
        trueCountX = 0;
        for (let i = 0; i < playerArrayX.length; i++) {
            if (arr.includes(playerArrayX[i])) {
                trueCountX = trueCountX + 1;
            }
            if (trueCountX === 2) {
                blockArray.push(arr);
            }
        }
    }
    if (blockArray.length > 0) { //checks if opponent has win and sets block move
        for (arr of blockArray) {
            for (item of arr) {
                if (numBoxLookUp[item.toString()].clicked === false) {
                    return item;
                }
            }
        }
    } else {
        return false;
    }
    return false;
}

function compBestMove() {
    let bestMove;
    noClick = [];
    for (obj of boxArray) {
        if (obj.clicked === false) {
            noClick.push(obj)
        }
    }
    if (noClick.length === 8) {  //determines first move
        if (five.clicked === false) {
            bestMove = 5;
            return bestMove;
        } else {
            bestMove = 1;
            return bestMove;
        }
    } else if (noClick.length === 6 && mustBlock() === false) {
        if (playerArrayX.includes(1) && playerArrayX.includes(9) || playerArrayX.includes(3) && playerArrayX.includes(7)) {
            bestMove = 2;
            return bestMove;
        } else if (playerArrayX.includes(5) && playerArrayX.includes(9)) {
            bestMove = 3;
            return bestMove;
        } else if (playerArrayX.includes(2) && playerArrayX.includes(4)) {
            bestMove = 1;
            return bestMove;
        } else if (playerArrayX.includes(2) && playerArrayX.includes(6)) {
            bestMove = 3;
            return bestMove;
        } else if (playerArrayX.includes(4) && playerArrayX.includes(8)) {
            bestMove = 7;
            return bestMove;
        } else if (playerArrayX.includes(6) && playerArrayX.includes(8)) {
            bestMove = 9;
            return bestMove;
        } else {
            index = (Math.floor(Math.random() * noClick.length + 1) - 1); //makes random move, this needs to play to win or defend.
            bestMove = noClick[index].value;
            return bestMove;
        }
    } else if (canWin()) {
        bestMove = canWin();
        return bestMove;
    } else if (mustBlock()) {
        bestMove = mustBlock();
        return bestMove;
    } else {
        index = (Math.floor(Math.random() * noClick.length + 1) - 1); //makes random move when inconsequential... basically a catch all right now
        bestMove = noClick[index].value;
        return bestMove;
    }
}