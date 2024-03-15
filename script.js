// script.js

// Define the game board (snake and ladder positions)
const board = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78
};

// Initialize player position
let playerPosition = 0;

// Function to roll the dice
function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    movePlayer(diceRoll);
}

// Function to move the player token on the board
function movePlayer(steps) {
    playerPosition += steps;
    if (board[playerPosition]) {
        // If the player lands on a snake or ladder, move to the corresponding position
        playerPosition = board[playerPosition];
    }
    if (playerPosition >= 100) {
        // If the player reaches or exceeds position 100, they win
        setMessage('Congratulations! You win the game!');
        disableRollButton();
    } else {
        setMessage(`You rolled a ${steps}. You are now on position ${playerPosition}.`);
    }
    updateBoard();
}

// Function to update the game board with player's token position
function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = index + 1;
        if (index + 1 === playerPosition) {
            const token = document.createElement('div');
            token.classList.add('token');
            cell.appendChild(token);
        }
    });
}

// Function to display message
function setMessage(message) {
    document.getElementById('message').innerText = message;
}

// Function to disable the roll dice button
function disableRollButton() {
    document.querySelector('button').disabled = true;
}
