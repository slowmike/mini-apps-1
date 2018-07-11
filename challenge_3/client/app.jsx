class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  render() {

    return (
      <div>
        <div className="page">
          <form id="F1">
            <span>
              Name<br/>
              <input type="text" id="name"/><br/>
            </span>
            <span>
              Email<br/>
              <input type="text" id="email"/><br/>
            </span>
            <span>
              Password<br/>
              <input type="password" id="pass"/><br/>
            </span>
            <button>Next</button>
          </form>
        </div>
        <div className="page">
          <form id="F2">
            <span>
              Street Address<br/>
              <input type="text" id="line1"></input><br/>
              <input type="text" id="line2"></input><br/>
            </span>
            <span>
              City<br/>
              <input type="text" id="city"></input><br/>
            </span>
            <span>
              State<br/>
              <input type="text" id="state"></input><br/>
            </span>
            <span>
              Postal Code<br/>
              <input type="text" id="postal"></input><br/>
            </span>
            <span>
              Phone Number<br/>
              <input type="text" id="phone"></input><br/>
            </span>
            <button>Next</button>
          </form>
        </div>
        <div className="page">
          <form id="F3">
            <span>
              Credit Card Number<br/>
              <input type="text" id="ccard"></input><br/>
            </span>
            <span>
              CVV<br/>
              <input type="text" id="cvv"></input><br/>
            </span>
            <span>
              Billing Zip Code<br/>
              <input type="text" id="billing"></input><br/>
            </span>
            <button>Next</button>
          </form>
        </div>
      </div>
    )
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));
