const _sides = ['x', 'o'];
const _board = [[,,],[,,],[,,]];
let turn = 0;
let player = [];
let start = 0;

var init = function() {

  let sides = _sides;
  player[0] = new Player('somename', pickSides('o', sides));
  console.log(`${player[0].name} is playing: ${player[0].side}`);
  player[1] = new Player('othername', sides[0]);
  console.log(`${player[1].name} is playing: ${player[1].side}`);
  // const player1 = new Player(prompt('Player 1, What is your name?'), pickSides(prompt('please pick "x" or "o"'),sides));
  // console.log(`${player1.name} is playing: ${player1.side}`);
  // const player2 = new Player(prompt('Player, What is your name?'), sides[0]);
  // console.log(`${player2.name} is playing: ${player2.side}`);
}

class Player {
  constructor(name, side) {
    this.name = name;
    this.side = side;
  }
}

var play = function(row, col) {
  if(turn < 9) {
    if(_board(row, col)) {
      _board(row,col) = player[turn%2+start].sides;
      if(isWinner(row, col)) {
        var winner = player[turn%2+start];
        console.log(`${winner.name} has won on turn ${turn+1}`);
      } else {
        console.log()
        turn++;
      }
    } else {
      console.log('Invalid Play: Please Try Again');
    }
  }
  console.log('Draw!');
}

var isWinner = (row, col) => {

}

var colWin = (col) => {

}

var rowWin = (row) => {

}

var diagWin = (row, col) => {
  
}

var pickSides = (str, sides) => {
  if(str === 'o') {
    return sides.pop();
  }
  if(str === 'x') {
    return sides.shift();
  }
  return pickSides(str, prompt('Bad Input: please pick "x" or "o"'))
}

init();
