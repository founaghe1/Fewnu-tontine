const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

router.get('/checkParticipation/:userId/:tontineId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const tontineId = req.params.tontineId;

    // Vérifiez si l'utilisateur participe à la tontine
    const isParticipating = await checkUserParticipation(userId, tontineId);

    res.json({ isParticipating });
  } catch (error) {
    console.error('Erreur lors de la vérification du statut de participation :', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fonction pour vérifier la participation
async function checkUserParticipation(userId, tontineId) {
  try {
    // Récupérez la tontine avec les participants
    const tontine = await Tontine.findById(tontineId).populate('participants', '_id');

    // Vérifiez si l'utilisateur participe en recherchant son identifiant dans le tableau d'identifiants d'utilisateurs
    const isParticipating = tontine.participants.some(participant => participant._id.equals(userId));

    return isParticipating;
  } catch (error) {
    console.error('Erreur lors de la vérification de la participation de l\'utilisateur à la tontine :', error);
    return false;
  }
}

module.exports = router;
