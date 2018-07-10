class Board {
  constructor(grid, ...player) {
    this.grid = grid;
    this.player = player;
    this.turn = 0;
    this.start = this.player[1].winner ? 1 : 0;
  }

  play(element, row, col) {
    let curTurn = (this.turn+this.start)%2;
    let curPlayer = this.player[(this.turn+this.start)%2];
    // console.log(this.start);
    // console.log(curPlayer);
    if(this.turn < 9) {
      if (this.grid[row][col] !== ' ') {
        console.log(boardString(this.grid));
        console.log('Invalid Play: Please Try Again');
        return;
      } else {
        this.grid[row][col] = curPlayer.side;
        element.innerHTML = curPlayer.side;
        console.log(`Turn: ${this.turn+1}`);
        console.log('Board State: \n'+boardString(this.grid));
        if (!curPlayer.isWinner(row, col, curPlayer.side)) {
          this.turn++;
          let nextTurn = (this.turn+this.start)%2;
          console.log(`${this.player[(this.turn+this.start)%2].name}'s turn...'`);
          document.getElementById(`${curTurn}`).style.backgroundColor = '#ff66';
          document.getElementById(`${nextTurn}`).style.backgroundColor = '#ff0';
        } else {
          var winner = curPlayer;
          var loser = this.player[(this.turn+this.start+1)%2];
          gameEnd(winner, loser);
          console.log(`---${winner.name} has won on turn ${this.turn+1}---`);
          // alert(`${winner.name} is the winner!`);
          // var boardState = `${JSON.stringify(_board[0])}\n${JSON.stringify(_board[1])}\n${JSON.stringify(_board[2])}`;
          // console.log('Board State: \n'+boardState);
          clearBoard(this);
          for (var el of document.getElementsByClassName('newGame')) {
            el.style.display = 'inline-block';
          }
        }
      }
    }
    if (this.turn >= 9) {
      console.log('Draw!');
    }
  }

}
