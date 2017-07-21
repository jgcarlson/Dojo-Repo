// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
module.exports = {
  register: (req, res) => {
    User.findOne({username: req.body.username}, (err, u) => {
      if (err) {
        console.log('Error in controller-check:', err)
      } else if (u == null) {
        let hashedpw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        let user = new User({firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, email: req.body.username, dob: req.body.username, password: hashedpw}, (err, success) => {
          if (err) {
            console.log('Error in controller-register:', err)
          }
        })
        user.save( (err, user) => {
          if (err) {
            console.log('Error in controller-register:', err)
          } else {
            req.session.uid = user._id
            return res.json(user)
          }
        })
      } else {
        return res.json({_id: 'error'})
      }
    })
  },
  login: (req, res) => {
    User.findOne({username: req.body.username}, (err, u) => {
      if (err) {
        console.log('Error in controller-login:', err)
        return res.json(err)
      } else if (u == null) {
        console.log('User not found.')
      } else {
        if (bcrypt.compareSync(req.body.password, u.password)) {
          req.session.name = u.firstname
          req.session.uid = u._id
          return res.json(u);
        } else {
          console.log('Passwords do not match.')
          return res.json({_id: 'error', error: 'Password does not match.'})
        }
      }
    })
  },
  read: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        console.log('Error in controller-read:', err)
      } else {
        return res.json(users)
      }
    })
  },
  logged: (req, res) => {
    if (req.session.uid != 'undefined') {
      res.json({b: req.session.uid})
    } else {
      res.json({b: false})
    }
  },
  logout: (req, res) => {
    console.log(req.session.id)
    req.session.destroy( (err) => {
      if (err) {
        console.log('Error in session destroy:', err);
      } else {
        console.log('Successfully logged out.')
      }
    })
  }
}

// Possible:
// // authenticate: function(request, response) {
// //   if (!request.session.tries)
// //     request.session.tries = 0
// //   if (request.session.tries >= 5) {
// //     response.json({
// //       action: 'login',
// //       status: false,
// //       attempt: request.session.tries,
// //       msg: ('Invalid Credentials ( Attempt '+request.session.tries+' / 5 '+') Invalid request, please try again later.')
// //     })
// //   }
// //   else {
// //     request.session.tries += 1
// //     User.findOne({email: request.body.email, password:request.body.password}, function(err, record){
// //       if(record){
// //
// //         // Actionable
// //
// //         // Generate auth_token
// //         // Store auth_token into session
// //         // request.session.lag = Date.time // Store Date/time into session
// //         response.json({
// //           action: 'login',
// //           status: true,
// //           auth_token: '123abc', // pass auth_token
// //           uid: record.id
// //         })
// //       }
// //       else{
// //         response.json({
// //           action: 'login',
// //           status: false,
// //           errors: err,
// //           msg: ('Invalid Credentials ( Attempt '+request.session.tries+' / 5 '+')')
// //         })
// //       }
// //
// //     })
// //   }
// // },
// // create: function(request, response){
// //
// //   User.findOne({_id: request.params.uid}, function(err, record){
// //
// //     // Actionable
// //
// //     // If the record exists, and the auth token matches, and the uid matches this record, and the time between the post request and the get request which follows is under ~1 second, session the user, redirect and confirm 'logged in'
// //     // if ( record
// //     // && request.session.auth_token == request.params.auth_token
// //     // && record._id == request.params.uid
// //     // && (Date.time - request.session.lag) < 1 ){
// //
// //
// //     if(record && '123abc' == request.params.auth_token && record._id == request.params.uid){
// //       // Set new Auth token for someone logged in.
// //       request.session.auth = '5389uhyjw0ju0589j03h89jw3890'
// //       response.redirect('/dashboard')
// //     }
// //   })
// //
// // },

// Example:
// // create: (req, res) =>{
// //   let user = new User({name: req.params.name});
// //   user.save( (err, user) => {
// //     if(err){
// //       res.status(400).send("Error saving user");
// //     }else{
// //       res.redirect('/' + user.name);
// //     }
// //   })
// // },
// // destroy: (req, res) =>{
// //   User.findOne({name: req.params.name}, (err ,user)=>{
// //     if(err) return res.status(400).send("Problem getting user");
// //     else{
// //       user.remove();
// //       res.redirect('/');
// //     }
// //   })
// // }
