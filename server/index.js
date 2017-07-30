var express = require('express');
var app = express();
var port = process.env.PORT;
var path = require('path');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');
var api = require('./api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(expressMongoDb('mongodb://voiceoffate:Zz14121992syka@ds115573.mlab.com:15573/notes'));

app.use(express.static(path.join(__dirname, '../app')));

app.use('/api', api);

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});