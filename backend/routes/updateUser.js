const express = require('express');
const router = express.Router(); // Créez un routeur Express.

// Importez votre fonction de mise à jour depuis le contrôleur.
const { update } = require('../controllers/auth');

// Définissez la route de mise à jour en utilisant le verbe HTTP PUT.
router.put('/updateUser/:id', update);

// Exportez le routeur.
module.exports = router;