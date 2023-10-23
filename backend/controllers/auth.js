const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');


// Register a new user
const register = async (req, res, next) => {
  const { username, phoneNumber,  email, password } = req.body;

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
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
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    console.log(user);

    const passwordMatch = await user.comparePassword(password);

    console.log(passwordMatch);
    console.log(password);
    

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password', password, passwordMatch });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};


// const login = (req, res, next) => {
//   const { username, password } = req.body;
  
//   User.findOne({ username })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({ error: 'Utilisateur non trouvé !' });
//       }

      
//       bcrypt.compare(password, user.password).then(valid => {
//           if (!valid) {
//             return res.status(401).json({ error: 'Mot de passe incorrect !' });
//           }
//           res.status(200).json({
//             userId: user._id,
//             token: jwt.sign(
//               { userId: user._id },
//               'RANDOM_TOKEN_SECRET',
//               { expiresIn: '24h' }
//             )
//           });
//         })
//         .catch(error => res.status(500).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// };


module.exports = { register, login };