const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

router.get('/getParticipants/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Récupérez les tontines auxquelles l'utilisateur participe
    const participatingTontines = await Tontine.find({ participants: userId }, '_id');

    // Renvoyer un tableau d'identifiants d'utilisateurs
    const participatingTontineIds = participatingTontines.map(tontine => tontine.tontine);

    res.json(participatingTontineIds);
  } catch (error) {
    console.error('Erreur lors de la récupération des participants de l\'utilisateur :', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
