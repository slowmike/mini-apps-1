var express = require('express');
var app = express();

app.use(express.static('public'));

var url = 'http://localhost:3000';

app.listen(3000);
