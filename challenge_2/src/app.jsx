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
    evt.preventDefault();
    console.log(this.state.input);
    this.postRequest((data) => this.setState({
      output: data
    }))
    // axios.post('http://127.0.0.1:3000', this.state.input)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  postRequest(callback) {
    $.ajax({
      url: '/',
      type: 'POST',
      contentType: 'application/json',
      data: this.state.input,
      success: (data) => {
        callback(data);
        console.log(data);
      },
      error: function(error) {
        console.log('testing');
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea type= "text" onChange={this.handleChange.bind(this)}></textarea>
          <button type="submit">submit</button>
        </form>
        <div>{this.state.output.split('\n').map(function(item) {
          return (
            {item}
            <br/>
          )
        })}</div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
