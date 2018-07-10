let _sides = ['x', 'o'];
let _board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
let start = 0;
let game = 0;
let player = [];
let evtListener = [];

var init = (element) => {
  element.style.display = 'none';
  game = 0;
  _sides = ['x', 'o'];
  // player[0] = new Player('somename', pickSides('o', _sides));``
  // console.log(`${player[0].name} is playing: ${player[0].side}`);
  // player[1] = new Player('othername', _sides[0]);
  // console.log(`${player[1].name} is playing: ${player[1].side}`);
  player[0] = new Player(prompt('Player 1, What is your name?'), pickSides(prompt('please pick "x" or "o"'), _sides));
  console.log(`${player[0].name} is playing: ${player[0].side}`);
  player[1] = new Player(prompt('Player 2, What is your name?'), _sides[0]);
  console.log(`${player[1].name} is playing: ${player[1].side}`);
  document.getElementById('Players').style.display = 'block';
  for(var i = 0; i < 2; i++) {
    var playerHTML = document.getElementsByClassName('player')[i];
    playerHTML.innerHTML = `${player[i].name} (${player[i].side})<div class= 'score'>0</div>`;
    playerHTML.style.display = 'inline-block';
  }
  document.getElementById('0').style.backgroundColor = '#ff0';
  gameStart(document.getElementById('playAgain'));
}

var gameStart = () => {
  for (var el of document.getElementsByClassName('newGame')) {
    el.style.display = 'none';
  }
  for (var cell of document.getElementsByClassName('grid')) {
    cell.style.backgroundColor = '#ff0';
  }
  game++;
  _board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
  let board = new Board(_board, player[0], player[1]);
  console.log(boardString(_board));
  player[0].setBoard(board);
  player[1].setBoard(board);
  generateNewBoard(board);
  console.log(`GAME #${game}`);
  player[1].winner ? console.log(`${player[1].name}'s turn...'`) : console.log(`${player[0].name}'s turn...'`);
}

var gameEnd = (winner, loser) => {
  winner.wins++;
  winner.winner = true;
  loser.winner = false;
  for(var i = 0; i < 2; i++) {
    document.getElementsByClassName('score')[i].innerText = player[i].wins;
  }
}

var generateNewBoard = (board) => {
  for(let r = 0; r < 3; r++) {
    for(let c = 0; c < 3; c++) {
      let grid = document.getElementById(r+''+c);
      evtListener[(r*3)+c] = () => {
        board.play(grid, r, c);
      }
      grid.addEventListener('mouseup', evtListener[(r*3)+c], true);
    }
  }
}

var clearBoard = (board) => {
  for(let r = 0; r < 3; r++) {
    for(let c = 0; c < 3; c++) {
      let grid = document.getElementById(r+''+c);
      grid.removeEventListener('mouseup', evtListener[(r*3)+c], true);
      grid.innerHTML = '';
    }
  }
  evtListener = [];
}

var boardString = (board) => {
  return `${JSON.stringify(board[0])}\n${JSON.stringify(board[1])}\n${JSON.stringify(board[2])}`;
}

// var play = (element, row, col) => {
//   let turn = (round+start)%2
//   if (round < 9) {
//     if (_board[row][col] !== ' ') {
//       console.log(_board[row][col]);
//       console.log('Invalid Play: Please Try Again');
//     } else {
//       _board[row][col] = player[turn].side;
//       element.innerHTML = player[turn].side;
//       var boardState = `${JSON.stringify(_board[0])}\n${JSON.stringify(_board[1])}\n${JSON.stringify(_board[2])}`;
//       console.log(`Turn: ${round+1}`);
//       console.log('Board State: \n'+boardState);
//       if (!isWinner(row, col, player[turn].side)) {
//         console.log(`${player[(turn+1)%2].name}'s turn...'`);
//         round++;
//       } else {
//         var winner = player[turn%2+start];
//         console.log(`---${winner.name} has won on turn ${round+1}---`);
//         // var boardState = `${JSON.stringify(_board[0])}\n${JSON.stringify(_board[1])}\n${JSON.stringify(_board[2])}`;
//         // console.log('Board State: \n'+boardState);
//         clearBoard();
//         for (var el of document.getElementsByClassName('newGame')) {
//           el.style.display = 'inline-block';
//         }
//       }
//     }
//   }
//   if (round >= 9) {
//     console.log('Draw!');
//   }
// }

// var isWinner = (row, col, side) => {
//   return colWin(col, side) || rowWin(row, side) || diagWin(row, col, side);
// }
//
// var colWin = (c, side) => {
//   for(var row of _board) {
//     if(row[c] !== side) return false;
//   }
//   return true;
// }
//
// var rowWin = (r, side) => {
//   for(var col of _board[r]) {
//   if(col !== side) return false;
//   }
//   return true;
// }
//
// var diagWin = (r, c, side) => {
//   var diag1 = [[0,0], [1,1], [2,2]];
//   var diag2 = [[0,2], [1,1], [2,0]];
//   var result = false;
//   if(r === c && !result) result = checkMajor(side);
//   if(r === 2-c && !result) result = checkMinor(side);
//   return result;
// }
//
// var checkMajor = (side) => {
//   for(var i = 0; i < 3; i++) {
//     if(_board[i][i] !== side) return false;
//   }
//   return true;
// }
//
// var checkMinor = (side) => {
//   for(var i = 0; i < 3; i++) {
//     if(_board[i][2-i] !== side) return false;
//   }
//   return true;
// }



var pickSides = (str, sides) => {
  if(str === 'o') {
    return sides.pop();
  }
  if(str === 'x') {
    return sides.shift();
  }
  return pickSides(prompt('Bad Input: please pick "x" or "o"'), sides);
}
