let playerArray = [];
let turnCount = 0;
let trueCount = 0;
let blockArray = [];
let currentBox;
let playerXName = 'X';
let playerOName = 'O';
let playerName;
let player;
let currentPlayer = 'X';
let timer;
let count = 6;
let noClick = [];
let index;
let onePlayer = false;
let compMove;

let boxes = Array.from(document.getElementsByClassName("box"));  //array of all divs to make setting event listeners easier

class Box {  //each box is an object with an element to point to, a value, and a clicked boolean
    constructor(element, value) {
        this.element = element;
        this.value = value;
        this.clicked = false;
        this.xClick = false;
        this.oClick = false;
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

boxArray = [one, two, three, four, five, six, seven, eight, nine];  //array of each object for referencing
//various lookup objects for different outputs in the program
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

//winning arrays to reference and check if wins or blocks are needed
let winningArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
//submit player X's name
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
//submit player O's name
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

let textDisplay = document.getElementById("textDisplay");  //sets event listener for status window
let onePlayerGame = document.getElementById("start1p");
let twoPlayerGame = document.getElementById("start2p");
//initializes one player game
onePlayerGame.addEventListener("click", () => {
    onePlayer = true;
    playerOName = 'Computer';
    twoPlayerGame.disabled = true;
    onePlayerGame.disabled = true;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    timer = setInterval(countDown, 1000);;
    playerArray = [];
    blockArray = [];
    turnCount = 0;
    trueCount = 0;
    currentPlayer = 'X';
    for (obj of boxArray) {
        obj.clicked = false;
        obj.xClick = false;
        obj.oClick = false;
        obj.element.style.color = 'red';
        obj.element.style.backgroundColor = 'orange';
    }
    for (box of boxes) {
        box.textContent = '';
        box.addEventListener("click", boxClick);
    }
});
//initializes two player game
twoPlayerGame.addEventListener("click", () => {
    twoPlayerGame.disabled = true;
    onePlayerGame.disabled = true;
    onePlayer = false;
    textDisplay.textContent = `It is ${playerXName}'s turn!`
    timer = setInterval(countDown, 1000);
    playerArray = [];
    blockArray = [];
    turnCount = 0;
    trueCount = 0;
    currentPlayer = 'X';
    for (obj of boxArray) {
        obj.clicked = false;
        obj.xClick = false;
        obj.oClick = false;
        obj.element.style.color = 'red';
        obj.element.style.backgroundColor = 'orange';
    }
    for (box of boxes) {
        box.textContent = '';
        box.addEventListener("click", boxClick);
    }
});
//event upon clicking a box
function boxClick() {
    //let boxNum = event.target.id;
    currentBox = boxIDLookUp[event.target.id];
    if (currentBox.clicked === false) {
        event.target.style.color = 'black';
        event.target.textContent = currentPlayer;
        currentBox.clicked = true;
        if (currentPlayer === 'X') {
            currentBox.xClick = true;
            playerClick();
            if (onePlayer === true && turnCount !== 9) {
                compMove = compBestMove();
                compMove = compMove.toString();
                currentBox = numBoxLookUp[compMove];
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
    } else {
        textDisplay.textContent = `NO! Pick another one!`;
    }
}
//determines actions based on player on click
function playerClick() {
    player = currentPlayer;
    if (player === 'X') {
        playerArray = [];
        for (obj of boxArray) {
            if (obj.xClick === true) {
                playerArray.push(obj.value);
            }
        }
        playerName = playerXName;
    } else {
        playerArray = [];
        for (obj of boxArray) {
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
                        onePlayer = false;
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
        clearInterval(timer);
        count = 6;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = ``;
            }
        }
        timer = setInterval(countDown, 1000);
        turnCount += 1;
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
        return textDisplay.textContent = `It is ${playerName}'s turn!`;
    } else {
        if (player === 'X') {
            currentPlayer = 'O';
            playerName = playerOName;
        } else {
            currentPlayer = 'X';
            playerName = playerXName;
        }
        clearInterval(timer);
        count = 6;
        for (obj of boxArray) {
            if (obj.clicked === false) {
                obj.element.textContent = ``;
            }
        }
        timer = setInterval(countDown, 1000);
        turnCount += 1;
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
        return textDisplay.textContent = `It is ${playerName}'s turn!`;
    }
}
//function for randomly checking a box on timeout
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
    if (currentPlayer === 'X') {
        noClick[index].xClick = true;
        playerClick();
        if (onePlayer === true && turnCount !== 9) {
            compMove = compBestMove();
            compMove = compMove.toString();
            currentBox = numBoxLookUp[compMove];
            currentBox.element.style.color = 'black';
            currentBox.element.textContent = currentPlayer;
            currentBox.clicked = true;
            currentBox.oClick = true;
            playerClick();
        }
    } else {
        noClick[index].oClick = true;
        playerClick();
    }
}
//timer countdown function
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
//determines if computer player can win and sets move
function canWin() {
    let winArray = [];
    playerArray = [];
    for (obj of boxArray) {
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
//determines if human has a winning move available and sets the computers move to block
function mustBlock() {
    playerArray = [];
    for (obj of boxArray) {
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
//determines if ther is a play to set up a pontential win
function setUpWin() {
    let setUpArray = [];
    let notClicked = 0;
    playerArray = [];
    for (obj of boxArray) {
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
                if (numBoxLookUp[num.toString()].clicked === false) {
                    notClicked += 1;
                }
                if (notClicked === 2) {
                    if (numBoxLookUp[arr[0].toString()].clicked === false) {
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
//determines the computers best move
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
    } else if (noClick.length === 6 && mustBlock() === false) {  //determines second move to avoid traps (need to make this more streamlined eventually)
        playerArray = [];
        for (obj of boxArray) {
            if (obj.xClick === true) {
                playerArray.push(obj.value);
            }
        }
        if (playerArray.includes(1) && playerArray.includes(9) || playerArray.includes(3) && playerArray.includes(7)) {
            bestMove = 2;
            return bestMove;
        } else if (playerArray.includes(5) && playerArray.includes(9)) {
            bestMove = 3;
            return bestMove;
        } else if (playerArray.includes(2) && playerArray.includes(4)) {
            bestMove = 1;
            return bestMove;
        } else if (playerArray.includes(2) && playerArray.includes(6)) {
            bestMove = 3;
            return bestMove;
        } else if (playerArray.includes(4) && playerArray.includes(8)) {
            bestMove = 7;
            return bestMove;
        } else if (playerArray.includes(6) && playerArray.includes(8)) {
            bestMove = 9;
            return bestMove;
        } else if (setUpWin()) {
            bestMove = setUpWin();
            return bestMove;
        } else {
            index = (Math.floor(Math.random() * noClick.length + 1) - 1); //catch all move so game doesn't break, shouldn't ever hit.
            bestMove = noClick[index].value;
            return bestMove;
        }
    } else if (canWin()) {
        bestMove = canWin();
        return bestMove;
    } else if (mustBlock()) {
        bestMove = mustBlock();
        return bestMove;
    } else if (setUpWin()) {
        bestMove = setUpWin();
        return bestMove;
    } else {
        index = (Math.floor(Math.random() * noClick.length + 1) - 1); //catch all move so game doesn't break, shouldn't ever hit.
        bestMove = noClick[index].value;
        return bestMove;
    }
}