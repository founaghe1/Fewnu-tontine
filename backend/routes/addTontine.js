// Importe le module Express.js.
const express = require('express');
// Importe le contrôleur 'addTontine'
const { addTontine } = require('../controllers/addTontine');

// Crée un nouvel routeur Express.
const router = express.Router();

// Définit une route POST avec l'URL '/addCotisation'.
// Lorsqu'une requête POST est reçue à cette URL, elle sera gérée par la fonction 'addCotisation' du contrôleur.
router.post('/addTontine', addTontine);

module.exports = router;