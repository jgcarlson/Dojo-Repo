// server/models/models.js
// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

const mongoose = require('mongoose');
let PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: [true, "This field is required."],
    trim: true
  }
}, { timestamps: true };

// register the schema as a model
let Post = mongoose.model('Post', PostSchema);
