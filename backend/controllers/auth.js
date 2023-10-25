const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');


// Register a new user
const register = async (req, res, next) => {
  const { username, phoneNumber,  email, password } = req.body;

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);

    //creer une intence du Model User puis l'enregistre dans la base de données
    const user = new User({ username, phoneNumber, email, password });
    await user.save();
    res.json({ message: 'Registration successful' });

  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  
  const {phoneNumber, password } = req.body;

  try {
    //Verification de l'existence du user dans la base de données en utlisant le phoneNumber
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    console.log(user);


    //Comparaisons du password saisi parraport a celui existant dans la base de données
    const passwordMatch = await user.comparePassword(password);

    console.log(passwordMatch);
    console.log(password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password', password, passwordMatch });
    }

    // Renvoyez un message de bienvenue avec le nom d'utilisateur
    res.json({ message: 'Bienvenue, ' + user.username + user.phoneNumber });

    // const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    //   expiresIn: '1 hour'
    // });

    // res.json({ token });
  } catch (error) {
    next(error);
  }
};



module.exports = { register, login };