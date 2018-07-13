import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css'

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [<div className={styles.grid0}></div>,
                <div className={styles.grid1}></div>,
                <div className={styles.grid2}></div>]
    }
  }
  handleClick(evt){
    evt.preventDefault();
    this.props.toggle(this.props.col);
  }
  render() {
    return(
      <div className={styles.grid} onClick={this.handleClick.bind(this)}>{this.state.colors[this.props.val]}</div>
    )
  }
};

window.Grid = Grid;
