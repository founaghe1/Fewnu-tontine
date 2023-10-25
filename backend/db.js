// Importe le module Mongoose pour interagir avec MongoDB.
const mongoose = require('mongoose');

// Importe le module dotenv pour charger les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Définit une fonction asynchrone nommée 'connectDB' pour établir une connexion à la base de données MongoDB.
const connectDB = async () => {

  // Définit l'URL de la base de données MongoDB; le nom de l'URL est stocké dans le fichier .env.
  // MONGODB_URL=`mongodb+srv://founaghe:founagheatlas@cluster0.ly68n1b.mongodb.net/fewnu-tontin?retryWrites=true&w=majority`

  try {
     // Tente de se connecter à la base de données MongoDB en utilisant les options spécifiées.
    await mongoose.connect(process.env.MONGODB_URL, {

      // Utilise le nouveau moteur d'analyse d'URL (URL parser).
      useNewUrlParser: true,

      // Utilise la nouvelle infrastructure de gestion de connexion.
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;