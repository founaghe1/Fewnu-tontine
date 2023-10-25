const express = require('express');
const { addTontine } = require('../controllers/addTontine');

const router = express.Router();

router.post('/addTontine', addTontine);

module.exports = router;