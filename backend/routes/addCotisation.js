const express = require('express');
const { addCotisation } = require('../controllers/addCotisation');

const router = express.Router();

router.post('/addCotisation', addCotisation);

module.exports = router;