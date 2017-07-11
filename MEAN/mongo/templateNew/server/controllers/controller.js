// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
let Quote = mongoose.model('Quote');
module.exports = {
  show: (req, res) => {
    Quote.find({}, (err, quotes) => {
      res.render('main', {quotes: quotes});
    })
  },
  create: (req, res) => {
    let quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save((err) => {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
  }
}
