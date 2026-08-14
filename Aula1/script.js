// Seleção dos elementos do DOM
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

// Variáveis de estado do jogo
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// Combinações possíveis para vencer
const winningConditions = [
    [0, 1, 2], // Linha 1
    [3, 4, 5], // Linha 2
    [6, 7, 8], // Linha 3
    [0, 3, 6], // Coluna 1
    [1, 4, 7], // Coluna 2
    [2, 5, 8], // Coluna 3
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundária
];

// Lógica de clique na célula
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add('taken');
    cell.style.color = currentPlayer === "X" ? "#d9534f" : "#5bc0de";

    checkWinner();
}

// Verificação de vitória ou empate
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.innerText = `🏆 Jogador ${currentPlayer} venceu!`;
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusText.innerText = "Deu velha! (Empate)";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Vez do jogador ${currentPlayer}`;
}

// Reiniciar o jogo
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusText.innerText = `Vez do jogador ${currentPlayer}`;
    
    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('taken');
        cell.style.color = "#333";
    });
}

// Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', resetGame);