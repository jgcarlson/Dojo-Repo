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
var ElephantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favorite_food: String,
  location: String
}, { timestamps: true })
mongoose.model('Elephant', ElephantSchema); // We are setting this Schema in our Models as 'User'
var Elephant = mongoose.model('Elephant') // We are retrieving this Schema from our Models, named 'User'
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
  Elephant.find({}, function(err, elephants) {
    if (err) {
      console.log('Something went wrong, horribly wrong.');
    } else {
      console.log('All good.');
      res.render('index', {elephants: elephants})
    }
  })
})
app.get('/create', function(req, res) {
  res.render('create');
})
app.get('/elephant/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  Elephant.find({id: id}, function(err, elephant) {
    if (err) {
      console.log('Something went wrong, horribly wrong.');
    } else {
      res.render('elephant/elephant', {elephant: elephant})
    }
  })
})
app.post('/process', function(req, res) {
  var elephant =  Elephant({name: req.body.name, age: req.body.age, favorite_food: req.body.favorite_food, location: req.body.location});
  elephant.save(function(err) {
    if(err) {
      console.log('Something went wrong, horribly wrong.');
      res.redirect('/create')
    } else {
      console.log('All good.');
      res.redirect('/');
    }
  });
});
