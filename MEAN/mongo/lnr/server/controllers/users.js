// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let User = mongoose.model('User');
module.exports = {
  in: (req, res) => {
    if (!req.session.user) {
      res.redirect('/')
    } else {
      console.log('Successful session.');
    }
  },
  register: (req, res) => {
    let errors = {};
    if (req.body.password != req.body.confirm) {
      console.log('Password don\'t match.');
      res.redirect('/')
    } else {
      let user = new User({first_name: req.body.fname, last_name: req.body.lname, email: req.body.email, phone: req.body.phone, dob: req.body.dob, password: req.body.password});
      user.save((err) => {
        if (err) {
          for (var each in err.errors) {
            errors[each] = err.errors[each].message
          }
          req.session.errors = errors;
          res.redirect('/');
        } else {
          req.session.user = user;
          res.redirect('/dashboard');
        }
      });
    }
  },
  login: (req, res) => {
    let errors = {};
    User.findOne({email: req.body.lemail}, (err, user) => {
      if (err) {
        console.log('Error 1');
        for (var each in err.errors) {
          errors[each] = err.errors[each].message
        }
        req.session.errors = errors;
        console.log('Error1', errors);
        res.redirect('/');
      } else if (user == null) {
        req.session.errors = {invalid_login: 'Try again.'}
        console.log('Error2', errors);
        res.redirect('/');
      } else if (req.body.lpassword == null) {
        console.log('Password is null.');
        res.redirect('/')
      } else if (user.checkPassword(req.body.lpassword) == true) {
        console.log('Success1');
        req.session.user = user;
        console.log(user);
        res.redirect('/dashboard');
      } else {
        console.log('Error3');
        req.session.errors = {invalid_login: 'Try again.'}
        res.redirect('/');
      }
    })
  },
  logout: (req, res) => {
    req.session.destroy(function(err) {
      if (err) {
        res.send('Error', err);
      } else {
        res.redirect('/');
      }
    })
  }
}
