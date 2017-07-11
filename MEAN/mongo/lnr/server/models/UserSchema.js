// server/models/models.js
// This is the file that specifies the schema to be loaded by mongoose.
// This file is required by mongoose.js.
// We do not need to require this file in the controller, instead, the model itself is loaded from mongoose.
// There can be many models in the server/models folder.

const mongoose = require('mongoose');
const val = require('validator');
let UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "this is for something else"],
    trim: true,
    // validate: {
    //   validator: (first_name) => {
    //     return val.isAlpha(first_name);
    //   }
    // }
  },
  last_name: {
    type: String,
    required: [true, "this is for something else"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "this is for something else"],
    trim: true
  },
  phone: {
    type: String,
    // validate: [{
    //   validator: (phone) => {
    //     return /\d{3}-\d{3}-\d{4}/.test(phone);
    //   },
    //   message: '{VALUE} is not a valid phone number.'
    // }],
    required: [true, 'Phone number required.']
  },
  dob: {
    type: String,
    required: true,
    // validate: {
    //   validator: (dob) => {
    //     val.isBefore()
    //   }
    // }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 200,
    validate: {
      validator: (value) => {
        return true;
      },
      message: 'Password must be at least 8 characters long.'
    }
  }
}, {timestamps: true});
// register the schema as a model
let User = mongoose.model('User', UserSchema);


// first_name: {
//   type: String,
//   required: [true, "this is for something else"],
//   trim: true,
// },
// last_name: {
//   type: String,
//   required: true,
//   trim: true
// },
// email: {
//   type: String,
//   required: true,
//   trim: true,
//   validate: [{
//     validator: function(email) {
//       return val.isEmail(email);
//     },
//     message: "{ VALUE } is not a valid email address"
//   },
//   {
//     validator: function(email) {
//       return false;
//     },
//     message: "{ VALUE } failed this validator"
//   }],
//   required: [true, "Email address required"]
// },
// phone: {
//   type: String,
//   validate: [{
//     validator: function(number) {
//       return /\d{3}-\d{3}-\d{4}/.test( number );
//     },
//     message: "{ VALUE } is not a valid phone number"
//   },
//   {
//     validator: function(number) {
//       return false;
//     },
//     message: "{ VALUE } failed this validator"
//   }],
//   required: [true, "Phone number required"]
// },
// dob: {
//   type: String,
//   required: true,
//   trim: true,
//   validate: {
//     validator: function(dob) {
//       return isBefore(dob) // second param is before date
//     },
//     message: "Birth date is required."
//   }
// },
// password: {
//   type: String,
//   required: true,
//   minlength: 8,
//   maxlength: 32,
//   validate: {
//     validator: function( value ) {
//       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
//     },
//     message: "Password failed validation, you must have at least 1 number, uppercase and special character"
//   }
// }
