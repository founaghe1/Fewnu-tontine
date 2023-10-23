const Cotisation = require('../models/Cotisation');

// Register a new Cotisation
const addCotisation = async (req, res, next) => {
    const { cotisation } = req.body;
  
    try {
      const CotisationMtn = new Cotisation({ cotisation });
      await CotisationMtn.save();
      res.json({ message: 'Cotisation Registration success' });
  
    } catch (error) {
      next(error);
    }
  };

  module.exports = { addCotisation };