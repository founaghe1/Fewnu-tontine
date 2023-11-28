const Cotisation = require('../models/Cotisation');
const Tontine = require('../models/Tontine');
const User = require('../models/User');

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
      return res.status(404).json({ message: 'Aucune tontine trouvée sous ce nom' });
    }

    // Créez la cotisation en associant l'ID de l'utilisateur et l'ID de la tontine
    const cotisationInstance = new Cotisation({
      cotisation,
      phoneNumberCot,
      tontineCot,
      userId: user._id,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
      },
      tontine: tontine.tontine,
    });

    // Récupérez toutes les informations de l'utilisateur associé à la cotisation
    const cotisationWithUser = await cotisationInstance
      .populate({
        path: 'user',
        select: 'firstName lastName phoneNumber', // Sélectionnez les champs que vous voulez inclure
      })
      .exec();

    // Sauvegardez la cotisation après avoir exécuté la population
    await cotisationInstance.save();

    res.json({ message: 'Enregistrement de la cotisation réussi', cotisation: cotisationWithUser });

  } catch (error) {
    next(error);
  }
};



module.exports = { addCotisation };
