import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
import './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]],
      curTurn: 1
    }
  }

  toggleGrid(col) {
    let newBoard = this.state.board.slice();
    let legalPlay = false;
    var curRow = -1;
    for(var row in newBoard) {
      if(newBoard[0][col] === 0) {
        if(newBoard[row][col] > 0) {
          curRow = row-1;
          newBoard[row-1][col] = this.state.curTurn;
          legalPlay = true;
          break;
        }
        if(JSON.parse(row) === 5) {
          curRow = row;
          newBoard[row][col] = this.state.curTurn;
          legalPlay = true;
        }
      }
    }
    legalPlay ? this.setState({curTurn: this.state.curTurn%2+1}) : console.log('Invalid Play: please try again!');
    this.setState({board: newBoard});
    this.handleWin(JSON.parse(curRow), col);
  }

  handleWin(row, col) {
    if(this.didWin(row, col)) {
      console.log(`${this.state.curTurn} won`);
    }
  }

  didWin(row, col) {
    return this.didWinHorizontally(row) || this.didWinVertically(col) || this.didWinMajorDiagonally(row, col) || this.didWinMinorDiagonally(row, col);
  }

  didWinHorizontally(row) {
    var curr = 0;
    var count = 1;
    for(var cell of this.state.board[row]) {
      curr === cell ? count+=1 : count = 1;
      curr = cell;
      if(count === 4 && curr !== 0) { return true; }
    }
    return false;
  }

  didWinVertically(col) {
    var curr = 0;
    var count = 1;
    for(var row of this.state.board) {
      curr === row[col] ? count+=1 : count = 1;
      curr = row[col];
      if(count === 4 && curr !== 0) { return true; }
    }
    return false;
  }

  didWinMajorDiagonally(row, col) {
    var curr = 0;
    var count = 1;
    var majorDiag = col-row;
    var board = this.state.board;
    var length = board.length;
    if(majorDiag >= 0) {
      for(var i = 0; i < length-majorDiag; i++) {
        curr === board[i][i+majorDiag] ? count += 1 : count = 1;
        curr = board[i][i+majorDiag];
        if(count === 4 && curr !== 0) { return true; }
      }
    } else {
      for(var i = 0; i < length+majorDiag; i++) {
        curr === board[i-majorDiag][i+majorDiag+1] ? count += 1 : count = 1;
        curr = board[i-majorDiag][i+majorDiag+1];
        if(count === 4 && curr !== 0) { return true; }
      }
    }
    return false;
  }

  didWinMinorDiagonally(row, col) {
    var curr = 0;
    var count = 1;
    var minorDiag = row+col;
    var board = this.state.board;
    var length = board.length;
    console.log(minorDiag, row, col);
    var diff;
    minorDiag >= 5 ? diff = 1+minorDiag : diff=12-minorDiag;
    var start = 0;
    if(minorDiag > 5) start = length-diff;
    for(var i = start; i < length-diff; i++) {
      console.log(i, i+start);
      curr === board[i][i+start] ? count += 1 : count = 1;
      curr = board[i][i+start];
      if(count === 4 && curr !== 0) { return true; }
    }
    return false;
  }

  render() {
    return(
      <div className={styles.app}>
        <Board id="board" board={this.state.board} toggle={this.toggleGrid.bind(this)}></Board>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
