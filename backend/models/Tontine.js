const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(

  {
    tontine: {
      type: String,
      ref: 'Tontine',
      required: true
    }
  },
  { timestamps: true }

);


const Tontine = mongoose.model('Tontine', userSchema);
  
module.exports = Tontine;

