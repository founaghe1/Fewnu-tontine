const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/userAssociCotisation', async (req, res, next) => {
  try {
    // Assuming you have implemented authentication and the user ID is available in the request
    const userId = req.user.id; // Replace with the actual way you retrieve the user ID from the authentication context

    // Retrieve the profile information of the authenticated user
    const userProfile = await User.findById(userId);

    if (!userProfile) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Return the user profile as a JSON response
    res.json(userProfile);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
