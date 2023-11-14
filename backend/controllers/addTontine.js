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
  const userId = req.params.userId;
  const tontineId = req.params.tontineId;

  try {
    const tontine = await Tontine.findById(tontineId);

    if (!tontine) {
      return res.status(404).json({ message: 'Tontine not found' });
    }

    // Supprimez l'userId de la liste des participants
    tontine.participants.pull(userId);

    // Enregistrez la tontine mise à jour
    await tontine.save();

    res.json({ message: 'User left the tontine successfully' });
  } catch (error) {
    next(error);
  }
};

// Update tontine participation status
const updateTontineParticipation = async (req, res, next) => {
  const userId = req.params.userId;
  const tontineId = req.params.tontineId;
  const participate = req.body.participate;


  try {
    const tontine = await Tontine.findById(tontineId);

    if (!tontine) {
      return res.status(404).json({ message: 'Tontine not found' });
    }

    const userIndex = tontine.participants.indexOf(userId);

    if (participate && userIndex === -1) {
      // User wants to participate, add them to the participants list
      tontine.participants.push(userId);
    } else if (!participate && userIndex !== -1) {
      // User wants to leave, remove them from the participants list
      tontine.participants.splice(userIndex, 1);
    }

    // Save the updated tontine
    await tontine.save();

    // Respond with the updated tontine
    res.json({ message: 'Tontine participation updated successfully', updatedTontine: tontine });
  } catch (error) {
    next(error);
  }
};

module.exports = { addTontine, participateInTontine, leaveTontine, updateTontineParticipation };
