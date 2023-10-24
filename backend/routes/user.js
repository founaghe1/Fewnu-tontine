const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/profile', async (req, res, next) => {
  try {
    // Récupérer toutes les tontines depuis la base de données
    const user = await User.find(); 

    // Renvoyer les tontines en tant que réponse JSON
    res.json(user); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;