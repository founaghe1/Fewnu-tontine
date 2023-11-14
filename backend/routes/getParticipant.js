// Assuming you have a router defined using express.Router()
const express = require('express');
const router = express.Router();

// Assuming you have a User model
const User = require('../models/User'); // 

// Route to get participating tontines for a specific user
router.get('/getParticipants/:userId', async (req, res, next) => {
  const userId = req.params.userId;

  try {
    // Assuming your User model has a participatingTontines field or similar
    const user = await User.findById(userId).populate('participatingTontines');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Extract the relevant information from the user model
    const participatingTontines = user.participatingTontines.map(tontine => ({
      _id: tontine._id,
      // Add other fields as needed
    }));

    res.json(participatingTontines);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
