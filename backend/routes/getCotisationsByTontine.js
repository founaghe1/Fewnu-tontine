// getCotisation.js
const express = require('express');
const router = express.Router();
const Cotisation = require('../models/Cotisation');

// Récupérer les cotisations pour une tontine spécifique
router.get('/getCotisationsByTontine/:tontineId', async (req, res, next) => {
    const { tontineId } = req.params;

    try {
        // Filtrer les cotisations pour la tontine spécifique
        const cotisations = await Cotisation.find({ tontine: tontineId });

        res.json(cotisations);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
