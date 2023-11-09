const Tontine = require('../models/Tontine');

// Register a new tontine
const addTontine = async (req, res, next) => {
  const { tontine, somme, cotisationDay } = req.body;

  try {
    // Create an instance of the model and save it to the database
    const tontineName = new Tontine({ tontine, somme, cotisationDay });
    
    await tontineName.save();
    res.json({ message: 'Tontine Registration success' });

  } catch (error) {
    next(error);
  }
};

// Participate in a tontine
const participateInTontine = async (req, res, next) => {
  const userId = req.params.userId; // Assuming userId is passed in the URL parameters
  const tontineId = req.params.tontineId; // Assuming tontineId is passed in the URL parameters

  try {
    // Find the tontine by ID
    const tontine = await Tontine.findById(tontineId);

    // Add the user's ID to the tontine's participants array
    tontine.participants.push(userId);

    // Save the updated tontine
    await tontine.save();

    res.json({ message: 'User has participated in the tontine' });

  } catch (error) {
    next(error);
  }
};

// Leave a tontine
const leaveTontine = async (req, res, next) => {
  const userId = req.params.userId; // Assuming userId is passed in the URL parameters
  const tontineId = req.params.tontineId; // Assuming tontineId is passed in the URL parameters

  try {
    // Find the tontine by ID
    const tontine = await Tontine.findById(tontineId);

    // Remove the user's ID from the tontine's participants array
    tontine.participants = tontine.participants.filter(participant => participant !== userId);

    // Save the updated tontine
    await tontine.save();

    res.json({ message: 'User has left the tontine' });

  } catch (error) {
    next(error);
  }
};

module.exports = { addTontine, participateInTontine, leaveTontine };
