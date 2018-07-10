import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
  }

  handleChange(evt) {
    this.setState({input: evt.target.value});
  }

  handleSubmit(evt) {
    $.ajax({
      type: 'POST',
      url: '127.0.0.1:3000',
      data: evt.target.value,
      success: function(data) {
        this.setState({output: data});
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  render() {

    console.log(this.state.output);
    return (
      <div>
        <form onSubmit={()=>this.handleSubmit}>
          <input type= "text" onChange={this.handleChange.bind(this)}></input>
          <button type="submit">submit</button>
        </form>
        <div>{this.state.output}</div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
