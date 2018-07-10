var express = require('express');
// var fs = require('fs');
// var url = require('url');
var app = express();

module.exports.app = app;

app.set('port', 3000)

app.use(express.static('client'));

app.post('/?', function(req, res) {
  let filePath = __dirname + 'data/json_report.json';
  fs.appendFile(filePath, req.body, () => {
  });
    console.log(req.body);
  res.send('hello world');
})

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
