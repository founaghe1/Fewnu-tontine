const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

// Endpoint to get tontine details by ID
router.get('/getTontineById/:tontineId', async (req, res) => {
  try {
    const tontineId = req.params.tontineId;
    const tontine = await Tontine.findOne({ _id: tontineId }).exec();

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
