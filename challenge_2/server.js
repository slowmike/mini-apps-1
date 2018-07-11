var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var jsonParser = bodyParser.json();

module.exports.app = app;

app.set('port', 3000)

app.use(express.static('client'));

var count = 0;
var spl = ' | ';

app.post('/', jsonParser, function(req, res) {
  if(!req.body) return res.sendStatus(418);
  let data = req.body;
  count = 0;
  return res.status(200).send(getJSONKeys(data)+handleData(data));
})

var getJSONKeys = (data) => {
  var arr = [];
  for(var key in data) {
    if(key !== 'children') { arr.push(key); }
  }
  return 'id'+spl+arr.join(spl)+'\n';
}

var handleData = (data) => {
  var arr = [];
  var hasChildren = false;
  for(var key in data) {
    key === 'children' ? hasChildren = true : arr.push(data[key]);
  }
  result = count+spl+arr.join(spl)+'\n';
  count++;
  if(hasChildren) {
    for(var child of data['children']) {
      result += handleData(child);
    }
  }
  return result;
};

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
