const express = require('express');
const router = express.Router();
const Cotisation = require('../models/Cotisation'); // importer du modèle de cotisation

router.get('/getCotisations', async (req, res, next) => {
  try {
    const cotisations = await Cotisation.find(); // Récupérez toutes les cotisations depuis la base de données

    res.json(cotisations); // Renvoyez les cotisations en tant que réponse JSON
  } catch (error) {
    next(error);
  }
});

module.exports = router;