const mongoose = require('mongoose');

const cotisationSchema = new mongoose.Schema(

  {
    cotisation: {
      type: String,
      required: true,
    },
    phoneNumberCot: {
      type: Number,
      required: false,
    } ,
    tontineCot: {
      type: String,
      required: true,
    } ,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Référence au modèle User
    },
    tontine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tontine', // Référence au modèle Tontines
    }
  },
  { timestamps: true }

);


const Cotisation = mongoose.model('Cotisation', cotisationSchema);
  
module.exports = Cotisation;

