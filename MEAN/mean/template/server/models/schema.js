// server/models/models.js
// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

const mongoose = require('mongoose');

// create the schema
const PlayerSchema = new mongoose.Schema({
  name: {type:String, required: [true, 'A player name is required to create player.']},
  position: {type:String},
  status: [
    {
      game1:String,
      game2:String,
      game3:String
    }
  ]
}, {timestamps: true});

// register the schema as a model
mongoose.model('Player', PlayerSchema);
