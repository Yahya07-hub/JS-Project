// const statusDisplay = document.querySelector('.game--status');

// let gameActive = true;
// let currentPlayer = "X";
// let gameState = ["", "", "", "", "", "", "", "", ""];

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// statusDisplay.innerHTML = currentPlayerTurn();

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// function handleCellPlayed(clickedCell, clickedCellIndex) {
//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }

// function handlePlayerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     statusDisplay.innerHTML = currentPlayerTurn();
// }

// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winCondition = winningConditions[i];
//         const a = gameState[winCondition[0]];
//         const b = gameState[winCondition[1]];
//         const c = gameState[winCondition[2]];
//         if (a === '' || b === '' || c === '')
//             continue;
//         if (a === b && b === c) {
//             roundWon = true;
//             break
//         }
//     }

//     if (roundWon) {
//         statusDisplay.innerHTML = winningMessage();
//         gameActive = false;
//         return;
//     }

//     const roundDraw = !gameState.includes("");
//     if (roundDraw) {
//         statusDisplay.innerHTML = drawMessage();
//         gameActive = false;
//         return;
//     }

//     handlePlayerChange();
// }

// function handleCellClick(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

//     if (gameState[clickedCellIndex] !== "" || !gameActive)
//         return;

//     handleCellPlayed(clickedCell, clickedCellIndex);
//     handleResultValidation();
// }

// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
// }


// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);




// Get the game elements
const gameTitle = document.querySelector('.game-title');
const gameContainer = document.querySelector('game-container');
const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.game-status');
const resetButton = document.querySelector('.reset-button');

// Initialize the game state
let currentPlayer = 'X';
let gameState = Array(9).fill(null);
let gameOver = false;
let audioTurn = new Audio("ting.mp3")
let winAudio = new Audio("win.mp3")
let drawAudio = new Audio("game-over.mp3")

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Add event listeners to the cells
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (gameState[index] !== null) return;
        gameState[index] = currentPlayer;
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameStatus.innerHTML = currentPlayerTurn();
        audioTurn.play();
        checkWin();
    });
});

// Add event listener to the reset button
resetButton.addEventListener('click', () => {
    gameState = Array(9).fill(null);
    cells.forEach((cell) => {
        cell.textContent = '';
    });
    gameOver = false;
    currentPlayer = 'X';
    gameStatus.textContent = '';
});

// Check for a win
function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            gameStatus.textContent = `Player ${gameState[a]} wins!`;
            gameOver = true;
            winAudio.play();
            return;
        }
    }

    if (!gameState.includes(null)) {
        gameStatus.textContent = 'It\'s a draw!';
        gameOver = true;
        setTimeout(() => drawAudio.play() , 800);
        
    }
}