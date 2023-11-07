const Tontine = require('../models/Tontine');

// Register a new tontine
const addTontine = async (req, res, next) => {
    const { tontine, somme } = req.body;
  
    try {
      // Create an instance of the model and save it to the database
      const tontineName = new Tontine({ tontine, somme });
      
      await tontineName.save();
      res.json({ message: 'Tontine Registration success' });
  
    } catch (error) {
      next(error);
    }
  };
 
  module.exports = { addTontine };