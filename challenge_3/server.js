var express = require('express');
var bodyParser = require('body-parser')
var mysql = require('mysql')
// var db = require('createMongoDB');

var db = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'checkout'
})

db.connect();

var app = express();

module.exports.app = app;

app.set('port', 3000);

app.use(express.static('public'));
app.use(bodyParser.json());

var inputs = {};

app.post('/', (req, res) => {
  var data = req.body;
  data['end'] ? postReq() : inputs = Object.assign(inputs, data);
  res.status(201).send();
});

app.get('/', (req, res) => {
  console.log(inputs);
  res.status(200).send(inputs);
});

var postReq = () => {
  var queryStr = `insert into checkoutData(name, email, password, addressline1, addressline2, city, state, postal, phone, ccn, cvv, billing)
                    value (${inputs['Name']}, ${inputs['Email']}, ${inputs['Password']},
                    ${inputs['Address Line 1']}, ${inputs['Address Line 2']}, ${inputs['City']}, ${inputs['State']}, ${inputs['Postal Code']}, ${inputs['Phone Number']},
                    ${inputs['Credit Card Number']}, ${inputs['CVV Input']}, ${inputs['Billing Zip Code']})`
  db.query(queryStr, (err, result) => {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
}

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
