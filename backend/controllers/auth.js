// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const User = require("../models/User");
const nodemailer = require("nodemailer");



// const { createTransport } = require("nodemailer");

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);

// const transporter = nodemailer.createTransport(config.email);  




// Register a new user
const register = async (req, res, next) => {
  const { firstName, lastName, phoneNumber, email, password, addedByUser, role } = req.body;

  try {
    const user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,   
      addedByUser,
      role: role || 'admin', // If role is not specified, default to 'admin'
    });

    await user.save();

    // If addedByUser is provided and the role is 'user', send the registration email
    if (addedByUser && user.role === 'user') {
      // Retrieve the admin user by ID
      const adminUser = await User.findById(addedByUser);

      if (!adminUser) {
        // Handle the case where the admin user is not found
        return res.status(404).json({ message: 'Admin user not found' });
      }

      const transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp-relay.brevo.com",
        port: 587,
        // secure: true,
        auth: {
          user: "mohameddiallo.msd11@gmail.com",
          pass: "QPRUOhkqjmYp4NZb",
        },
      });

      // Send the registration email
      const mailOptions = {
        from: adminUser.email,
        to: user.email,
        subject: 'Bienvenue dans Fewnu Tontine',
        text: `Vous avez été inscrit dans Fewnu Tontine par ${adminUser.firstName} ${adminUser.lastName}. Cliquez sur le lien suivant pour réinitialiser votre mot de passe : http://votre_site/reset-password/${user._id}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('Error send: ', error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      // Close the transporter
      // transporter.close();   
    }

    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    next(error);
  }
};





// Login with an existing user
const login = async (req, res, next) => {
  const { phoneNumber, password } = req.body;

  try {
    //Verification de l'existence du user dans la base de données en utlisant le phoneNumber
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //Comparaisons du password saisi parraport a celui existant dans la base de données
    const passwordMatch = await user.comparePassword(password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect password", password, passwordMatch });
    }

    // Renvoyez les informations du user
    res.json({ user });

    // res.json({ token });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const userId = req.params.id; // Vous devez avoir un moyen de transmettre l'ID de l'utilisateur à mettre à jour (par exemple, depuis les paramètres de l'URL).

  try {
    // Vérifiez si l'utilisateur existe en recherchant son ID.
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Mettez à jour les propriétés de l'utilisateur avec les nouvelles valeurs.
    if (req.body.firstName) {
      user.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
      user.lastName = req.body.lastName;
    }

    if (req.body.phoneNumber) {
      user.phoneNumber = req.body.phoneNumber;
    }

    if (req.body.email) {
      user.email = req.body.email;
    }

    // Enregistrez les modifications dans la base de données.
    await user.save();

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    next(error);
  }
};

const updatePassword = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { oldPassword, newPassword } = req.body;

    // Vérifiez si l'ancien mot de passe correspond au mot de passe actuel de l'utilisateur
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // Mettez à jour le mot de passe avec le nouveau mot de passe
    user.password = newPassword;

    await user.save();

    res.json({ message: "Password updated successfully", user });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, update, updatePassword };
