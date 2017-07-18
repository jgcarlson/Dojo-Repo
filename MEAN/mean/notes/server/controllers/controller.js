// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
const Post = mongoose.model('Post');
module.exports = {
  add: (req, res) => {
    console.log('req.body in add:', req.body)
    let post = new Post({ comment: req.body.comment })
    post.save( (err, post) => {
      if (err) {
        console.log('Error in controller:', err);
        // res.status(400).send({error: "alsjdf;lkajsdlf"})
        res.json(err)
      } else {
        return res.json(post);
      }
    })
  },
  retrieveComments: (req, res) => {
    Post.find({}, (err, posts) => {
      if (err) {
        console.log('Error in controller:', err);
        // res.status(400).send({error: "alsjdf;lkajsdlf"})
        res.json(err)
      } else {
        return res.json(posts);
      }
    })
  }
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
