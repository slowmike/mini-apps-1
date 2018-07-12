class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,

    };
  }

  goToNextPage(evt) {
    evt.preventDefault();
    this.state.page >= 4 ? this.setState({page: 0}) : this.setState({page: this.state.page+1});
    this.render();
  }

  render() {
    var curPage, btnStr;
    switch(this.state.page) {
      case 0:
        curPage = <Form0/>;
        btnStr = 'Checkout';
        break;
      case 1:
        curPage = <Form1/>;
        btnStr = 'Next';
        break;
      case 2:
        curPage = <Form2/>;
        btnStr = 'Next';
        break;
      case 3:
        curPage = <Form3/>;
        btnStr = 'Next';
        break;
      case 4:
        curPage = <Form4/>;
        btnStr = 'Submit';
        break;
    }

    return (
      <div className="page">
        <form>
          {curPage}
          <button onClick={this.goToNextPage.bind(this)}>{btnStr}</button>
        </form>
      </div>
    );
  }
}

var Form0 = (props) => (
  <div>
    <h1>Do You Want To Checkout?</h1>
  </div>
)

var Form1 = (props) => (
  <div>
    <span>
      Name<br/><input type="text" name="name"/><br/>
    </span>
    <span>
      Email<br/><input type="text" name="email"/><br/>
    </span>
    <span>
      Password<br/><input type="password" name="pass"/><br/>
    </span>
  </div>
);

var Form2 = (props) => (
  <div>
    <span>
      Street Address<br/>
      <input type="text" name="line1"></input><br/>
      <input type="text" name="line2"></input><br/>
    </span>
    <span>
      City<br/><input type="text" name="city"></input><br/>
    </span>
    <span>
      State<br/><input type="text" name="state"></input><br/>
    </span>
    <span>
      Postal Code<br/><input type="text" name="postal"></input><br/>
    </span>
    <span>
      Phone Number<br/><input type="text" name="phone"></input><br/>
    </span>
  </div>

);

var Form3 = (props) => (
  <div>
    <span>
      Credit Card Number<br/><input type="text" name="ccard"></input><br/>
    </span>
    <span>
      CVV<br/><input type="text" name="cvv"></input><br/>
    </span>
    <span>
      Billing Zip Code<br/><input type="text" name="billing"></input><br/>
    </span>
  </div>
);

var Form4 = (props) => (
  <div>
    <h3>Is this information correct?</h3>
  </div>
)
ReactDOM.render(<App/>, document.getElementById('app'));
