const Tontine = require('../models/Tontine');

// Register a new tontine
const addTontine = async (req, res, next) => {
    const { tontine } = req.body;
  
    try {
      const tontineName = new Tontine({ tontine });
      await tontineName.save();
      res.json({ message: 'Tontine Registration successful' });
  
    } catch (error) {
      next(error);
    }
  };

  module.exports = { addTontine };