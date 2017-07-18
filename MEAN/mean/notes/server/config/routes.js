// server/config/routes.js
// This is the file that specifies which routes will be handled and by which controller methods.
// From routes.js we require the controller file (or files).

const mongoose = require('mongoose');
const controller = require('./../controllers/controller.js');
module.exports = app => {
  app.post('/api/posts', controller.add);

  app.get('/api/posts', controller.retrieveComments);

  // app.all("*", (req,res,next) => {
  //   res.sendfile(path.resolve("./../../public/dist/index.html"));
  // });
}

// ../../public/dist/index.html
// /Users/JC/Workshop/Dojo-Repo/MEAN/mean/notes/server/config/routes.js
// /Users/JC/Workshop/Dojo-Repo/MEAN/mean/notes/public/dist/index.html

// Example:
// // module.exports = app => {
// //   app.get('/api/users', controller.index);
// //   app.post('/api/users', controller.create);
// //   app.delete('/api/users/:user_id', controller.destroy);
// //   app.get('/api/users/:user_id', controller.show);
// //
// //   app.all("*", (req,res,next) => {
// //     res.sendfile(path.resolve("./public/dist/index.html"))
// //   });
// // }
