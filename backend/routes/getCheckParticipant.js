const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

router.get('/checkParticipationStatus/:userId/:tontineId', async (req, res) => {
  const { userId, tontineId } = req.params;

  try {
    // Recherchez la tontine par ID
    const tontine = await Tontine.findById(tontineId);

    if (!tontine) {
      return res.status(404).json({ error: 'Tontine not found' });
    }

    // Vérifiez si l'utilisateur participe à cette tontine
    const isParticipating = tontine.participants.includes(userId);

    // Répondez avec le statut de participation
    res.json({ isParticipating });
  } catch (error) {
    console.error('Error checking participation status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
