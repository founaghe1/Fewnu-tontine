const express = require('express');
const router = express.Router();
const User = require('../models/User'); // 

// Endpoint pour ajouter une Tontine à la liste des Tontines d'un utilisateur
router.post('/addTontineToUser', async (req, res) => {
  const { userId, tontineId } = req.body;

  try {
    // Recherche de l'utilisateur par ID
    const user = await User.findById(userId);

    if (user) {
      // Ajout de l'ID de la Tontine à la liste
      user.participatingTontines.push(tontineId);

      // Sauvegarde des modifications dans la base de données
      await user.save();

      return res.status(200).json({ message: 'Tontine ajoutée avec succès à la liste des Tontines de l\'utilisateur.' });
    } else {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la Tontine à la liste de l\'utilisateur :', error);
    return res.status(500).json({ error: 'Erreur serveur lors de l\'ajout de la Tontine.' });
  }
});

module.exports = router;
