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
 
  module.exports = { addTontine };