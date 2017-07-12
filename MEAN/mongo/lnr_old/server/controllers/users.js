// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
let User = mongoose.model('User');
module.exports = {
  register: (req, res) => {
    req.checkBody('email', 'Please enter a valid email address.').isEmail();
    req.checkBody('phone', 'A phone number is required.').isMobilePhone('en-US');
    let errors = req.validationErrors();
    if (errors) {
      console.log(errors);
    } else {
      let user = new User({first_name: req.body.fname, last_name: req.body.lname, email: req.body.email, phone: req.body.phone, dob: req.body.dob, password: req.body.password});
      console.log(user);
      user.save((err) => {
        console.log('test3');
        if(err){;
          console.log("something went wrong", err);
          res.redirect('/');
        } else {
          res.redirect('/main');
        }
      })
    }
  }
}
