class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      input: {}
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.page > 0) {
      for(var key of evt.target) {
        if(!!key.name) {
          if(!key.value) {
            alert(`Missing ${JSON.stringify(key.name)}`)
            return;
          }
          this.state.input[key.name] = key.value;
        }
      }
      this.postData(evt);
    }
    this.goToNextPage(evt);
  }

  postData(evt) {
    var data = {};
    for(var key of evt.target) {
      if(!!key.name) {
        if(!key.value) {
          alert(`Missing ${JSON.stringify(key.name)}`)
          return;
        }
        data[key.name] = key.value;
      }
    }
    if(this.state.page < 4) {
      $.ajax({
        url: "/",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: data => {console.log(data);},
        error: error => {console.error(error);}
      });
    } else {
      $.ajax({
        url: "/",
        type: "POST",
        data: JSON.stringify({'end': true}),
        contentType: 'application/json',
        success: data => {console.log(data);},
        error: error => {console.error(error);}
      });
    }
  }

  getData() {
    var info = {};
    $.ajax({
      url: "/",
      type: "GET",
      success: data => {
        console.log(data);
      },
      error: error => {
        console.error(error);
      }
    });
    return info;
  }

  goToNextPage(evt) {
    this.state.page >= 4 ? this.setState({page: 0}) : this.setState({page: this.state.page+1});
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
        curPage = <Form4 inputs={this.state.input}/>;
        btnStr = 'Submit';
        break;
    }

    return (
      <div className='page'>
        <form id={`form${this.state.page}`} onSubmit={this.handleSubmit.bind(this)}>
          {curPage}
          <div className='buttonHolder'>
            <button type='submit'>{btnStr}</button>
          </div>
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
      Name<br/><input type='text' name='Name'/><br/>
    </span>
    <span>
      Email<br/><input type='text' name='Email'/><br/>
    </span>
    <span>
      Password<br/><input type='password' name='Password'/><br/>
    </span>
  </div>
);

var Form2 = (props) => (
  <div>
    <span>
      Street Address<br/>
      <input type='text' name='Address Line 1'></input><br/>
      <input type='text' name='Address Line 2'></input><br/>
    </span>
    <span>
      City<br/><input type='text' name='City'></input><br/>
    </span>
    <span>
      State<br/><input type='text' name='State'></input><br/>
    </span>
    <span>
      Postal Code<br/><input type='text' name='Postal Code'></input><br/>
    </span>
    <span>
      Phone Number<br/><input type='text' name='Phone Number'></input><br/>
    </span>
  </div>

);

var Form3 = (props) => (
  <div>
    <span>
      Credit Card Number<br/><input type='text' name='Credit Card Number'></input><br/>
    </span>
    <span>
      CVV<br/><input type='text' name='CVV Input'></input><br/>
    </span>
    <span>
      Billing Zip Code<br/><input type='text' name='Billing Zip Code'></input><br/>
    </span>
  </div>
);

var Form4 = (props) => (
  <div id="F4">
    {Object.keys(props.inputs).map(key =>
      (key === 'Password' || key === 'Credit Card Number' || key === 'CVV Input') ?
        <div key={key}>{key} : <i>hidden</i></div> : <div key={key}>{key} : {props.inputs[key]}</div>
    )}
    <h3>Is this information correct?</h3>
  </div>
)
ReactDOM.render(<App/>, document.getElementById('app'));
