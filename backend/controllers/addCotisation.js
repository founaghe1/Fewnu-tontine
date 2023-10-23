const Cotisation = require('../models/Cotisation');
const User = require('../models/User');



// Register a new Cotisation
const addCotisation = async (req, res, next) => {
    const { cotisation, username, phoneNumberCot } = req.body;
  
    try {

        // Recherchez l'utilisateur en fonction du numéro de téléphone
        const user = await User.findOne({ phoneNumber: phoneNumberCot });

        if (!user) {
        return res.status(404).json({ message: 'Utilisateur introuvable' });
        }

        // // Vérifiez si le numéro de téléphone correspond
        // if (user.phoneNumber !== phoneNumberCot) {
        //     console.log(user.phoneNumber);
        //     console.log(phoneNumberCot);
        //     return res.status(400).json({ message: 'Le numéro de téléphone ne correspond pas à l\'utilisateur',
        //     user, phoneNumberCot
        // });
        // }

        // Créez la cotisation en associant l'ID de l'utilisateur
        const CotisationMtn = new Cotisation({ cotisation, user: user._id });
        await CotisationMtn.save();
        res.json({ message: 'Cotisation Registration success' });
  
    } catch (error) {
      next(error);
    }
  };

  module.exports = { addCotisation };