// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
// tell the express app to listen on port 8000
var server = app.listen(5000, function() {
  console.log('Connected successfully to port 5000.');
});
app.use(bodyParser.urlencoded({ extended: true }));
// sessions
app.use(session({secret: 'codingdojorocks', resave: true,
    saveUninitialized: true}));  // string for encryption
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
  res.render('index');
});
app.post('/results', function(req, res) {
  let data = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render('results', {data: data});
});
