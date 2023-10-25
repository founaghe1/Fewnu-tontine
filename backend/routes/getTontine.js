const express = require('express');
const router = express.Router();
const Tontine = require('../models/Tontine');

router.get('/getTontines', async (req, res, next) => {
  try {
    // Récupérer toutes les tontines depuis la base de données
    const tontine = await Tontine.find(); 

    // Renvoyer les tontines en tant que réponse JSON
    res.json(tontine); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;