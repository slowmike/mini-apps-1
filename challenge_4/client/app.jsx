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
    for(var row in newBoard) {
      if(newBoard[row][col] > 0 && JSON.parse(row) !== 0) {
        newBoard[row-1][col] = this.state.curTurn;
        legalPlay = true;
        break;
      }
      if(JSON.parse(row) === 5) {
        newBoard[row][col] = this.state.curTurn;
        legalPlay = true;
      }
    }
    legalPlay ? curTurn = curTurn%2+1 : console.log('Invalid Play: please try again!');
    this.setState({board: newBoard});
    console.log(JSON.stringify(this.state.board));
  }

  render() {
    return(
      <div className ={styles.app}>
        <Board id="board" board={this.state.board} toggle={this.toggleGrid.bind(this)}></Board>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
