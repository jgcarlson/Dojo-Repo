const mongoose = require('mongoose');

const ObjSchema = new mongoose.Schema({
  name: {type:String}
}, {timestamps: true});

mongoose.model('Obj', ObjSchema);
