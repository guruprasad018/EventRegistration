var express = require('express');
var path = require('path');
var events = require('./eventsController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
//pull body parser into webserver, so that webserver knows how to parse json correctly
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + '/app'));

//handle a get request
app.get('/data/event/:id',events.get);
//handle a post request
app.post('/data/event/:id', events.save);

app.listen(8000);
console.log('listening on port 8000....');