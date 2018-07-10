import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange(evt) {
    this.setState({input: evt.target.value});
  }

  handleSubmit(evt) {
    axios.post(`127.0.0.1:3000`, this.state.input)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type= "text" onChange={this.handleChange.bind(this)}></input>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
