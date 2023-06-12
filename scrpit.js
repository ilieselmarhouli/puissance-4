// Création du tableau de jeu
const rows = 6;
const columns = 7;
let board = [];
let currentPlayer = 'X';

function createBoard() {
  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let col = 0; col < columns; col++) {
      board[row][col] = '';
    }
  }
}

// Affichage du tableau de jeu
function displayBoard() {
  const boardContainer = document.getElementById('board');
  boardContainer.innerHTML = '';

  for (let row = 0; row < rows; row++) {
    const rowElement = document.createElement('div');
    rowElement.className = 'row';

    for (let col = 0; col < columns; col++) {
      const cellElement = document.createElement('div');
      cellElement.className = 'cell';
      cellElement.addEventListener('click', () => playMove(col));

      const cellText = document.createTextNode(board[row][col]);
      cellElement.appendChild(cellText);

      // Ajout de la classe pour la couleur du joueur actuel
      if (board[row][col] === 'X') {
        cellElement.classList.add('player1');
        cellElement.innerHTML=" ";
      } else if (board[row][col] === 'O') {
        cellElement.classList.add('player2');
        cellElement.innerHTML=" ";
      }

      rowElement.appendChild(cellElement);
    }

    boardContainer.appendChild(rowElement);
  }
}

// Vérification de la victoire
function checkWin(player) {
  // Vérification horizontale
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns - 3; col++) {
      if (
        board[row][col] === player &&
        board[row][col + 1] === player &&
        board[row][col + 2] === player &&
        board[row][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // Vérification verticale
  for (let row = 0; row < rows - 3; row++) {
    for (let col = 0; col < columns; col++) {
      if (
        board[row][col] === player &&
        board[row + 1][col] === player &&
        board[row + 2][col] === player &&
        board[row + 3][col] === player
      ) {
        return true;
      }
    }
  }

        // Vérification diagonale (descendante)
        for (let row = 0; row < rows - 3; row++) {
    for (let col = 0; col < columns - 3; col++) {
      if (
        board[row][col] === player &&
        board[row + 1][col + 1] === player &&
        board[row + 2][col + 2] === player &&
        board[row + 3][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // Vérification diagonale (montante)
  for (let row = 3; row < rows; row++) {
    for (let col = 0; col < columns - 3; col++) {
      if (
        board[row][col] === player &&
        board[row - 1][col + 1] === player &&
        board[row - 2][col + 2] === player &&
        board[row - 3][col + 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
}

// Jouer un coup
function playMove(column) {
  for (let row = rows - 1; row >= 0; row--) {
    if (board[row][column] === '') {
      board[row][column] = currentPlayer;
      break;
    }
  }

  // Vérification de la victoire
  if (checkWin(currentPlayer)) {
    alert('Joueur ' + currentPlayer + ' a gagné !');
    createBoard();
  } else {
    // Changement de joueur
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  displayBoard();
}

// Initialisation du jeu
createBoard();
displayBoard();