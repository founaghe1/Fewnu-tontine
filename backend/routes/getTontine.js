const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

router.get('/getTontines', async (req, res) => {
  try {
    // Assurez-vous que vous obtenez les tontines avec les participants
    const tontines = await Tontine.find().populate('participants', '_id');

    res.json(tontines);
  } catch (error) {
    console.error('Erreur lors de la récupération des tontines :', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
