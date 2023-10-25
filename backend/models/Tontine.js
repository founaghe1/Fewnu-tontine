const mongoose = require('mongoose');

const tontineSchema = new mongoose.Schema(

  {
    tontine: {
      type: String,
      required: true
    }
  },
  { timestamps: true }

);


const Tontine = mongoose.model('Tontine', tontineSchema);
  
module.exports = Tontine;

