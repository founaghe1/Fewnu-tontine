const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/profile', async (req, res, next) => {
  try {
    // Retrieve the authenticated user's ID from the request
    const userId = req.user._id;

    // Find the user based on the ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Return the user profile data as a JSON response
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
