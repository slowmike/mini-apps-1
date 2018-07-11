var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Components {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
        <div>
          <F1>
            Name:
            <input type="text"></input>
            Email:
            <input type="text"></input>
            Password:
            <input type="text"></input>
          </F1>
        </div>
        <div>
          <F2></F2>
        </div>
        <div>
          <F3></F3>
        </div>
      </div>
    )
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));
