const Cotisation = require('../models/Cotisation');
const Tontine = require('../models/Tontine');
const User = require('../models/User');

// Enregistrez une nouvelle Cotisation en associant automatiquement l'ID de l'utilisateur correspondant et pour quelle tontine est la cotisation
const addCotisation = async (req, res, next) => {
  const { cotisation, phoneNumberCot, tontineCot } = req.body; 

  try {
    // Recherchez l'utilisateur en fonction du numéro de téléphone
    const user = await User.findOne({ phoneNumber: phoneNumberCot });

    if (!user) {
      return res.status(404).json({ message: 'Aucun utilisateur avec ce numéro de téléphone' });
    }

    // Recherchez le type de tontine en fonction de son nom
    const tontine = await Tontine.findOne({ tontine: tontineCot });

    if (!tontine) {
      return res.status(404).json({ message: 'Aucune tontine  trouvée sous ce nom' });
    }

    // Créez la cotisation en associant l'ID de l'utilisateur et l'ID de la tontine
    const CotisationMtn = new Cotisation({ cotisation, user: user._id, tontine: tontine.tontine });
    await CotisationMtn.save();
    res.json({ message: 'Enregistrement de la cotisation réussi' });

  } catch (error) {
    next(error);
  }
};

module.exports = { addCotisation };