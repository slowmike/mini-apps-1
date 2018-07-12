var express = require('express');
// var db = require('./createMongoDB.js');
var app = express();

module.exports.app = app;

app.set('port', 3000);

app.use(express.static('public'));

if(!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
