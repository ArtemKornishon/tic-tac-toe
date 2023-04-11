let players = ['x', 'o'];
let activePlayer = 0;
let field


function startGame() {
  field = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  activePlayer = players[0];
  renderBoard(field);
}


function click(col, row) {
  field[col][row] = activePlayer;
  renderBoard(field);

  if (
    (field[0][0] === activePlayer &&
      field[0][1] === activePlayer &&
      field[0][2] === activePlayer) ||
    (field[1][0] === activePlayer &&
      field[1][1] === activePlayer &&
      field[1][2] === activePlayer) ||
    (field[2][0] === activePlayer &&
      field[2][1] === activePlayer &&
      field[2][2] === activePlayer) ||
    (field[0][0] === activePlayer &&
      field[1][0] === activePlayer &&
      field[2][0] === activePlayer) ||
    (field[0][1] === activePlayer &&
      field[1][1] === activePlayer &&
      field[2][1] === activePlayer) ||
    (field[0][2] === activePlayer &&
      field[1][2] === activePlayer &&
      field[2][2] === activePlayer) ||
    (field[0][0] === activePlayer &&
      field[1][1] === activePlayer &&
      field[2][2] === activePlayer) ||
    (field[0][2] === activePlayer &&
      field[1][1] === activePlayer &&
      field[2][0] === activePlayer)
  ) {
    showWinner(players.indexOf(activePlayer));
    
  }
    
  else {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
    } else if ((activePlayer = players[1])) {
      activePlayer = players[0];
    }
  }
}