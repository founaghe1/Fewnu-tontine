const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const addTontineRoutes = require('./routes/addTontine')
const addCotisationRoutes = require('./routes/addCotisation')
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Enable CORS from client-side
app.use(cors());

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes); 

// Define tontine routes
app.use('/addTontine', addTontineRoutes);

// Define cotisation routes
app.use('/addCotisation', addCotisationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});