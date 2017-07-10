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
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
}, { timestamps: true })
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
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
  res.render('index');
})
app.post('/process', (req, res) => {
  var quote = new Quote({name: req.body.name, quote: req.body.q});
  quote.save(function(err) {
    if (err) {
      console.log('Something went wrong...');
      res.redirect('/');
    } else {
      console.log('All good.');
      res.redirect(307, '/quotes')
    }
  });
});

app.post('/quotes', (req, res) => {
  Quote.find({}, function(err, quotes) {
    if (err) {
      res.render('index', {data: 'Some kind of error.'})
    } else {
      console.log(quotes);
      res.render('quotes', {data: quotes})
    }
  })
})
