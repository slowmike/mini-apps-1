class Player {
  constructor(name, side) {
    this.name = name === null ? '' : name;
    this.side = side;
    this.winner = false;
    this.wins = 0;
  }

  setBoard(board) {
    this.board = board.grid;
  }

  isWinner(row, col) {
    return this.colWin(col) || this.rowWin(row) || this.diagWin(row, col);
  }

  colWin(col) {
    for(var row of this.board) {
      if(row[col] !== this.side) return false;
    }
    return true;
  }

  rowWin(row) {
    for(var col of this.board[row]) {
      if(col !== this.side) return false;
    }
    return true;
  }

  diagWin(row, col) {
    var result = false;
    if(row === col && !result) result = this.checkMajor(this.side);
    if(row === 2-col && !result) result = this.checkMinor(this.side);
    return result;
  }

  checkMajor() {
    for(var i = 0; i < 3; i++) {
      if(this.board[i][i] !== this.side) return false;
    }
    return true;
  }
  checkMinor() {
    for(var i = 0; i < 3; i++) {
      if(this.board[i][2-i] !== this.side) return false;
    }
    return true;
  }
}
