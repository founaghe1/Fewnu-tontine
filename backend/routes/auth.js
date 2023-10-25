// Importe le module Express.js.
const express = require('express');

// Importe le contrôleur 'register et login'
const { register, login } = require('../controllers/auth');

// Crée un nouvel routeur Express.
const router = express.Router();

// Définit une route POST avec l'URL '/register pour l'inscription et login pour la connexion'.
// Lorsqu'une requête POST est reçue à cette URL, elle sera gérée par la fonction 'register ou login' du contrôleur.
router.post('/register', register);
router.post('/login', login);

module.exports = router;