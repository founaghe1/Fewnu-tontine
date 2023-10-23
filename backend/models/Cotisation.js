const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(

  {
    cotisation: {
      type: String,
      required: true
    }
  },
  { timestamps: true }

);


const Cotisation = mongoose.model('Cotisation', userSchema);
  
module.exports = Cotisation;

