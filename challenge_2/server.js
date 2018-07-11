var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var jsonParser = bodyParser.json();

module.exports.app = app;

app.set('port', 3000)

app.use(express.static('client'));


app.post('/', jsonParser, function(req, res) {
  if(!req.body) return res.sendStatus(418);
  let data = req.body;
  console.log(handleData(data));
  return res.status(200).send(handleData(data));
})

var handleData = (data) => {
  var arr = [];
  var hasChildren = false;
  for(var key in data) {
    key === 'children' ? hasChildren = true : arr.push(data[key]);
  }
  result = arr.join(',')+'\n';
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
