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
var messages = [];
var users = [];
var user;
io.sockets.on('connection', function(socket) {
  //all the socket code goes in here!
  socket.on('enter_user', (data) => {
    user = data.user
    users.push(user)
    var text = user + ' has joined the chat room.';
    messages.push(text);
    socket.broadcast.emit('announce_enter', {announce: text});
    socket.broadcast.emit('current_users', {users: users});
  });
  socket.on('setup', (data) => {
    socket.emit('setup_info', {messages: messages})
    socket.broadcast.emit('current_users', {users: users});
  })
  socket.on('new_message', (data) => {
    var text = user + ' said: ' + data.message
    messages.push(text);
    socket.broadcast.emit('announce_message', {announce: text});
  })
  socket.on('exit_user', (data) => {
    var text = data.user + ' has left the chat room.';
    messages.push(text);
    var index = users.findIndex((element) => {
      return element == data.user;
    });
    if (index != -1) {
      users.splice(index, 1);
    }
    socket.broadcast.emit('announce_exit', {announce: text});
    socket.broadcast.emit('current_users', {users: users});
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
  session.id = req.sessionID;
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
