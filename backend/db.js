const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  MONGODB_URL=`mongodb+srv://founaghe:founaghe@cluster0.ly68n1b.mongodb.net/fewnu-tontin?retryWrites=true&w=majority`
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;