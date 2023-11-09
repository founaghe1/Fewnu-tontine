// ../models/Tontine.js

const mongoose = require('mongoose');

const tontineSchema = new mongoose.Schema(
  {
    tontine: {
      type: String,
      required: true,
    },
    somme: {
      type: Number,
      default: 0,
      required: true,
    },
    cotisationDay: {
      type: String,
      enum: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming your user model is named 'User'
      },
    ],
  },
  { timestamps: true }
);

const Tontine = mongoose.model('Tontine', tontineSchema);

module.exports = Tontine;
