// set up ========================
const express  = require('express');
const app      = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// configuration =================
app.use(express.static(path.join(__dirname, 'public', 'dist')))
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(session({
  secret: 'wrjovUHWr8w4ghOUHG$Whwuheiuhaifhua',
  resave: true,
  saveUninitialized: true
}));

// listen (start app with node server.js) ======================================
var server = app.listen(5000);
console.log("App listening on port 5000");