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
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  socket.on("posting_form", (data) => {
    var number = Math.floor(Math.random() * 1000);
    socket.emit('updated_message', {name: data.name, location: data.location, language: data.language, comment: data.comment, number: number})
  })
  socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: "sockets are the best!"});
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
  // console.log(req.body);
  res.render('index');
});
app.post('/results', function(req, res) {
  console.log(req.body);
});
app.get('/results', function(req, res) {
  res.render('results');
});
