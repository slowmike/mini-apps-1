var express = require('express');
var bodyParser = require('body-parser')
var db = require('./createMongoDB.js');
var app = express();

module.exports.app = app;

app.set('port', 3000);

app.use(express.static('public'));
app.use(bodyParser.json());

var inputs = {};

app.post('/', (req, res) => {
  var data = req.body;
  data['end'] ? db.collection.insert(inputs) : inputs = Object.assign(inputs, data);
  res.status(200).send(data);
});

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
