const mongoose = require('mongoose');

//definition du modele schema Mongodb pour l'entité Cotisation en utisant le framework de gestion de base de données Mongoose; ce schema comprte des champs comme cotisation, phoneNumber...

const cotisationSchema = new mongoose.Schema(

  { 
    cotisation: {
      type: Number,
      required: true,
    },
    phoneNumberCot: {
      type: Number,
      required: false,
    } ,
    tontineCot: {
      type: String,
      required: false,
    } ,
    userCall: {
      type: Number,
      ref: 'User', // Référence au modèle User
    },
    tontine: {
      type: String,
    }
  },
  { timestamps: true }

);

//creation du modele de Mongoose Cotisation 
const Cotisation = mongoose.model('Cotisation', cotisationSchema);
  
module.exports = Cotisation;

