import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'
import './Grid.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className={styles.board}>
        {this.props.board.map((row, y) => {
          return row.map((val, x) => <Grid col={x} val={val} toggle={this.props.toggle}></Grid>);
        })
        }
      </div>
    )
  }
};

window.Board = Board;
