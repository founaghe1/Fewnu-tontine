const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tontine = require('../models/Tontine');

// Endpoint to get tontine details by ID
router.get('/getTontineById/:tontineId', async (req, res) => {
  try {
    const tontineId = req.params.tontineId;
    // Validate if tontineId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(tontineId)) {
      return res.status(400).json({ error: 'Invalid tontineId format' });
    }

    const tontine = await Tontine.findOne({ _id: tontineId }).exec();
    console.log('Requested tontineId:', tontineId);

    if (tontine) {
      res.json(tontine);
    } else {
      res.status(404).json({ error: 'Tontine not found' });
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des tontines :', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
