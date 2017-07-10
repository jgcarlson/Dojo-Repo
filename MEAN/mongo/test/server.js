// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require Mongoose
var mongoose = require('mongoose');
// Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/my_first_db'); // localhost/ + database_name
// Use native promises
mongoose.Promise = global.Promise;
// Create Schema
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
}, { timestamps: {} })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Require Session
var session = require('express-session');
app.use(session({
  secret: 'codingdojorocks', // string for encryption
  resave: true,
  saveUninitialized: true
}));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Require socket.io
var io = require('socket.io').listen(server);
// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function(socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  socket.on("button_clicked", function(data) {
    console.log('Someone clicked a button!  Reason: ' + data.reason);
    socket.emit('server_response', {response: "sockets are the best!"});
  });
});
// Setting our Server to Listen on Port: 8000
var server = app.listen(5000, function() {
  console.log("listening on port 5000");
});
// Routes
// Root Request
app.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log('Error in GET.');
      res.render('index', {error: 'There appears to be an error.'});
    } else {
      console.log('DB data rendered successfully.');
      res.render('index', {users: users});
    }
  })
})
app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name: req.body.name, age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    if(err) { // if there is an error console.log that something went wrong!
      console.log('Something went wrong.');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('Successfully added a user!');
      res.redirect('/');
    }
  });
});
