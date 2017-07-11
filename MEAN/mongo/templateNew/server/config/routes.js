// server/config/routes.js
// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

const mongoose = require('mongoose');
const quotes = require('../controllers/controller.js');
module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index')
  })
  app.post('/quotes', (req,res) => {
    quotes.create(req, res)
  })
  app.get('/main', (req, res) => {
    quotes.show(req, res)
  })
}
