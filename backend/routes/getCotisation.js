// getCotisations.js
const express = require('express');
const router = express.Router();
const Cotisation = require('../models/Cotisation');

router.get('/getCotisations', async (req, res, next) => {
  try {
    const userId = req.user.id; // Assurez-vous d'avoir une middleware d'authentification qui ajoute l'utilisateur à la requête (req.user).

    // Récupérez les cotisations de l'utilisateur actuel depuis la base de données
    const cotisations = await Cotisation.find({ user: userId });

    // Renvoyez les cotisations de l'utilisateur actuel en tant que réponse JSON
    res.json(cotisations);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
