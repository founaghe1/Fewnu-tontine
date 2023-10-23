const mongoose = require('mongoose');

const cotisationSchema = new mongoose.Schema(

  {
    cotisation: {
      type: String,
      required: true,
    }
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', // Référence au modèle User
    // }
  },
  { timestamps: true }

);


const Cotisation = mongoose.model('Cotisation', cotisationSchema);
  
module.exports = Cotisation;

