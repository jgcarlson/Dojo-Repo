// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
const Obj = mongoose.model('Obj');
module.exports = {
  // code here
}

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
