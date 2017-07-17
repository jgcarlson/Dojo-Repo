// set up ========================
var express  = require('express');                // require express
var app      = express();                         // create our app w/ express
var mongoose = require('mongoose');               // mongoose for mongodb
var bodyParser = require('body-parser');          // pull information from HTML POST (express4)
var io = require('socket.io').listen(server);     // connect socket.io
var session = require('express-session');         // require express-session

// configuration =================

mongoose.connect('mongodb://localhost/default');                // localhost/ + database_name

app.use(express.static(__dirname + '/public/dist'));            // connect to Angular public folder
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application
app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(session({
  secret: 'wrjovUHWr8w4ghOUHG$Whwuheiuhaifhua', // string for encryption
  resave: true,
  saveUninitialized: true
}));
io.sockets.on('connection', function(socket) {
  socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: "sockets are the best!"});
  });
});

// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./public/dist/index.html');           // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
var server = app.listen(5000);
console.log("App listening on port 5000");
