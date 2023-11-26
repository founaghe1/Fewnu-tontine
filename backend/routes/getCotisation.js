const express = require('express');
const router = express.Router();
const Cotisation = require('../models/Cotisation'); // importer du modèle de cotisation

router.get('/getCotisations', async (req, res, next) => {
  try {
    
    // Récupérez toutes les cotisations depuis la base de données
    const cotisations = await Cotisation.find(); 

    // Renvoyez les cotisations en tant que réponse JSON
    res.json(cotisations); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;