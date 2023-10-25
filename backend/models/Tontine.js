const mongoose = require('mongoose');


// Définit un schéma MongoDB pour l'entité "Tontine".
const tontineSchema = new mongoose.Schema(

  {
    tontine: {
      type: String,
      required: true
    }
  },
  { timestamps: true }

);

// Crée un modèle Mongoose appelé "Tontine" à partir du schéma défini ci-dessus.
const Tontine = mongoose.model('Tontine', tontineSchema);
  
module.exports = Tontine;

