// server/config/routes.js
// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

const mongoose = require('mongoose');
const users = require('../controllers/users.js');
module.exports = function(app) {
  app.get('/', (req, res) => {
    var errors;
    console.log('error list', req.session.errors);
    if (req.session.errors != 'undefined') {
      errors = req.session.errors;
      req.session.errors = '';
    } else {
      req.session.errors = '';
    }
    res.render('index', {errors: errors});
  });
  app.post('/register', (req, res) => {
    users.register(req, res);
  });
  app.post('/login', (req, res) => {
    users.login(req, res);
  });
  app.post('/logout', (req, res) => {
    users.logout(req,res);
  })
  app.get('/dashboard', (req, res) => {
    users.in(req, res);
    res.render('dashboard', {first_name: req.session.user.first_name})
  });
}
