// getCotisations.js
const express = require('express');
const router = express.Router();
const Cotisation = require('../models/Cotisation');
const authenticate = require('../middlewares/auth');

router.get('/getCotisations', authenticate, async (req, res, next) => {
  try {
    const userId = req.user._id; // Now you can safely access req.user._id

    // Récupérez les cotisations de l'utilisateur actuel depuis la base de données
    const cotisations = await Cotisation.find({ user: userId });

    // Renvoyez les cotisations de l'utilisateur actuel en tant que réponse JSON
    res.json(cotisations);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
