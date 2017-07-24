// set up ========================
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// configuration =================
mongoose.Promise = global.Promise;
app.use(express.static(path.join(__dirname, 'public', 'dist')))
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(require('express-session')({
    secret: 'KEEP_IT_SECRET.KEEP_IT_SAFE.',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

// passport configuration =================
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// listen (start app with node server.js) ======================================
var server = app.listen(5000, () => {console.log('------------------------------- Server up and running on port 5000 -------------------------------')});
