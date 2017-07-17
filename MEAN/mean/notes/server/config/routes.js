const mongoose = require('mongoose');

module.exports = function(app) {
  app.get('/api/create', (req, res) => {
    res.json(true);
  });

  app.post('/api/retrieve', (req, res) => {
    res.json(true);
  });
  
  app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });

}
