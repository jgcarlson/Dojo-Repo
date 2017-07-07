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
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  //all the socket code goes in here!
  let counter = 0;
  socket.on('plus_clicked', (data) => {
    counter++;
    socket.emit('add', {
      counter: counter
    });
  });
  socket.on('reset_clicked', (data) => {
    counter = 0;
    socket.emit('res', {
      counter: counter
    });
})

})
app.use(bodyParser.urlencoded({ extended: true }));
// sessions
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
  console.log(req.body);
  res.render('index');
});
// app.post('/results', function(req, res) {
  // let data = {
  //   name: req.body.name,
  //   location: req.body.location,
  //   language: req.body.language,
  //   comment: req.body.comment
  // }
// });
app.get('/results', function(req, res) {
  res.render('results');
});
