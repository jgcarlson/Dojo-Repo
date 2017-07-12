// server/models/models.js
// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Your first name is required."],
    trim: true,
  },
  last_name: {
    type: String,
    required: [true, "Your last name is required."],
    trim: true
  },
  phone: {
    type: String,
    validate: [{
      validator: function( number ) {
        return /\d{3}-\d{3}-\d{4}/.test( number );
      },
      message: "This is not a valid phone number"
    }],
    required: [true, "Please enter a valid phone number."]
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email address."],
    validate: {
      validator: function(value) {
        return /^.+@.+\..+$/.test(value);
      },
      message: "Please enter a valid email address."
    }
  },
  dob: {
    type: Date,
    required: [true, "Your birth date is required."],
    max: Date('2000-01-01')
  },
  password: {
    type: String,
    required: [true, "Password must be at least 8 characters."],
    minlength: 8,
    maxlength: 200,
    validate: {
      validator: function(value) {
        return /\S{8,200}/.test(value);
      },
      message: "Password must be at least 8 characters."
    }
  }
},
{timestamps: true});

UserSchema.pre('save',  function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    next();
})

// register the schema as a model
let User = mongoose.model('User', UserSchema);
