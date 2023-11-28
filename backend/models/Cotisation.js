const mongoose = require('mongoose');

const cotisationSchema = new mongoose.Schema(
  {
    cotisation: {
      type: Number,
      required: true,
    },
    phoneNumberCot: {
      type: Number,
      required: false,
    },
    tontineCot: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tontine: {
      type: String,
    },
  },
  { timestamps: true }
);

const Cotisation = mongoose.model('Cotisation', cotisationSchema);
module.exports = Cotisation;
