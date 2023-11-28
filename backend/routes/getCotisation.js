const express = require('express');
const router = express.Router();
const Cotisation = require('../models/Cotisation'); // importer du modèle de cotisation

router.get('/getCotisations', async (req, res, next) => {
  try { 
    // Récupérez toutes les cotisations depuis la base de données
    const cotisations = await Cotisation.find()
      .populate({
        path: 'user',
        select: 'firstName lastName phoneNumber',
      })
      .exec();

    // Créez une nouvelle liste pour stocker les cotisations avec les détails de l'utilisateur
    const cotisationsWithUserDetails = cotisations.map(cotisation => {
      // Extrait les informations nécessaires de l'utilisateur
      const user = cotisation.user;
      const { firstName, lastName, phoneNumber } = user;

      // Crée un nouvel objet avec les détails de l'utilisateur et d'autres détails de la cotisation
      return {
        _id: cotisation._id,
        cotisation: cotisation.cotisation,
        tontine: cotisation.tontine,
        user: cotisation._id,
        createdAt: cotisation.createdAt,
        updatedAt: cotisation.updatedAt,
        __v: cotisation.__v,
        user: {
          firstName,
          lastName,
          phoneNumber,
        },
      };
    });

    // Renvoyez les cotisations avec les détails de l'utilisateur en tant que réponse JSON
    res.json(cotisationsWithUserDetails); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;
