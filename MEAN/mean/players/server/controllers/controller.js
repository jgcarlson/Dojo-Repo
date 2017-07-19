// server/controllers/controller.js
// This is the file that handles all of the server-side logic. The controller is called upon by the routes.
// The controller interacts with preloaded models to run database commands.
// The controller sends the response to the client.
// There can be many controllers in the server/controllers folder.

const mongoose = require('mongoose');
const Player = mongoose.model('Player');
module.exports = {
  insert: (req, res) => {
    let player = new Player({ name: req.body.name, position: req.body.position });
    player.status = [{game1: 'Undecided'}, {game2: 'Undecided'}, {game3: 'Undecided'}];
    player.save( (err, player) => {
      if (err) {
        console.log('Error in controller/add:', err)
      } else {
        return res.json(player);
      }
    })
  },
  retrieve: (req, res) => {
    Player.find({}, (err, players) => {
      if (err) {
        console.log('Error in controller/retrieve:', err)
      } else {
        return res.json(players);
      }
    })
  },
  delete: (req, res) => {
    Player.findByIdAndRemove(req.body.id, (err, success) => {
      if (err) {
        console.log('There was an error.')
      } else {
        console.log('Deleted', success)
      }
    });
  },
  playing: (req, res) => {
    console.log(req.body)
    Player.findOne({'_id': req.body.id}, (err, player) => {
      if (err) {
        console.log('Error in controller/playing:', err)
      } else {
        let game = req.body.game;
        let index = req.body.index
        console.log(req.body)
        player.status[index][game] = 'Playing';
        player.save( (err, updated) => {
          if (err) {
            console.log('Error in controller/playing/save:', err)
          } else {
            return res.json(updated);
          }
        })
      }
    });
  },
  notplaying: (req, res) => {
    Player.findOne({'_id': req.body.id}, (err, player) => {
      if (err) {
        console.log('Error in controller/notplaying:', err)
      } else {
        let game = req.body.game;
        let index = req.body.index
        player.status[index][game] = 'Not Playing';
        player.save( (err, updated) => {
          if (err) {
            console.log('Error in controller/notplaying/save:', err)
          } else {
            return res.json(updated);
          }
        })
      }
    });
  },
  undecided: (req, res) => {
    console.log('Body in controller:', req.body);
    Player.findOne({'_id': req.body.id}, (err, player) => {
      let game = req.body.game;
      let index = req.body.index
      if (err) {
        console.log('Error in controller/undecided:', err)
      } else {
        console.log(game)
        console.log(index)
        console.log('whole', player.status[index][game])
        player.status[index][game] = 'Undecided';
        player.save( (err, updated) => {
          if (err) {
            console.log('Error in controller/undecided/save:', err)
          } else {
            return res.json(updated);
          }
        })
      }
    });
  },
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
