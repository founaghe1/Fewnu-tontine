const Cotisation = require('../models/Cotisation');
const User = require('../models/User');



// Register a new Cotisation
const addCotisation = async (req, res, next) => {
    const { cotisation, userId } = req.body;
  
    try {

        // vérifier si l'utilisateur existe avant de créer la cotisation
        const user = await User.findById(userId);
        if (!user) {
        return res.status(404).json({ message: 'Utilisateur introuvable' });
        }

        // Créez la cotisation en associant l'ID de l'utilisateur
        const CotisationMtn = new Cotisation({ cotisation, user: userId });
        await CotisationMtn.save();
        res.json({ message: 'Cotisation Registration success' });
  
    } catch (error) {
      next(error);
    }
  };

  module.exports = { addCotisation };