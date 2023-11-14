const express = require('express');
const router = express.Router();
const User = require('../models/User'); // 

// Endpoint pour récupérer la liste des Tontines d'un utilisateur
router.get('/getUserTontines/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Recherche de l'utilisateur par ID avec la liste des Tontines peuplée
    const userWithTontines = await User.findById(userId).populate('participatingTontines');

    if (userWithTontines) {
      return res.status(200).json(userWithTontines.participatingTontines);
    } else {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des Tontines de l\'utilisateur :', error);
    return res.status(500).json({ error: 'Erreur serveur lors de la récupération des Tontines.' });
  }
});

module.exports = router;
