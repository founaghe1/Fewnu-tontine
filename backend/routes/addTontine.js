// Importe le module Express.js.
const express = require('express');
// Importe les contrôleurs 'addTontine', 'participateTontine' et 'leaveTontine'.
const { addTontine, participateInTontine, leaveTontine, updateTontineParticipation } = require('../controllers/addTontine');

// Crée un nouvel routeur Express.
const router = express.Router();

// Définit une route POST avec l'URL '/addTontine'.
// Lorsqu'une requête POST est reçue à cette URL, elle sera gérée par la fonction 'addTontine' du contrôleur.
router.post('/addTontine', addTontine);

// Définit une route POST avec l'URL '/participateTontine/:tontineId/:userId'.
// Lorsqu'une requête POST est reçue à cette URL, elle sera gérée par la fonction 'participateTontine' du contrôleur.
router.post('/participateTontine/:tontineId/:userId', participateInTontine);

// Définit une route POST avec l'URL '/leaveTontine/:tontineId/:userId'.
// Lorsqu'une requête POST est reçue à cette URL, elle sera gérée par la fonction 'leaveTontine' du contrôleur.
router.post('/leaveTontine/:tontineId/:userId', leaveTontine);

router.put('/updateTontineParticipation/:userId/:tontineId', updateTontineParticipation);

module.exports = router;
