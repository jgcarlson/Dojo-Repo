// require express and path
const express = require("express");
const path = require("path");
// create the express app
const app = express();
// require bodyParser since we need to handle post data for adding a user
const bodyParser = require("body-parser");
const validator = require('express-validator');
const session = require('express-session');
const bcrypt = require('bcrypt');
app.use(session({
  secret: 'codingdojorocks', // string for encryption
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());
// static content
app.use(express.static(path.join(__dirname, './client/static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
const routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)
// tell the express app to listen on port 8000
var server = app.listen(5000, () => {
  console.log("listening on port 5000");
})
// require socket.io
var io = require('socket.io').listen(server);
// initialize socket.io
io.sockets.on('connection', function(socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  socket.on("button_clicked", function(data) {
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: "sockets are the best!"});
  });
});
