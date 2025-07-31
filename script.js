let currentPlayer = "X";
let gameBoard = Array(9).fill(null);
let gameActive = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function makeMove(cell, index) {
  if (!gameActive || gameBoard[index]) return;
  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;
  if (checkWinner()) {
    document.getElementById("status").textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (gameBoard.every(Boolean)) {
    document.getElementById("status").textContent = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  return winPatterns.some(pattern =>
    pattern.every(index => gameBoard[index] === currentPlayer)
  );
}

function resetGame() {
  gameBoard = Array(9).fill(null);
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").textContent = "Player X's Turn";
  document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}