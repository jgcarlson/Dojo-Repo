const controller = require('./../controller/controller.js');

module.exports = app => {
  app.get('/api/users', controller.index);
  app.post('/api/users', controller.create);
  app.delete('/api/users/:user_id', controller.destroy);
  app.get('/api/users/:user_id', controller.show);

  app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
  });
}
