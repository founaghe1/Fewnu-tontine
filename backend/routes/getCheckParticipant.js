const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

router.get('/checkParticipation/:userId/:tontineId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const tontineId = req.params.tontineId;

    // Vérifiez si l'utilisateur participe à la tontine (vous devrez adapter cela à votre modèle de données)
    const isParticipating = await checkUserParticipation(userId, tontineId);

    res.json({ isParticipating });
  } catch (error) {
    console.error('Erreur lors de la vérification du statut de participation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fonction pour vérifier la participation (exemple - adaptez-le à votre modèle de données)
async function checkUserParticipation(userId, tontineId) {
  const tontine = await Tontine.findById(tontineId);
  return tontine.participants.includes(userId);
}

module.exports = router;
