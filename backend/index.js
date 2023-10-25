const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const addTontineRoutes = require('./routes/addTontine')
const addCotisationRoutes = require('./routes/addCotisation')
const getCotisationsRoutes = require('./routes/getCotisation')

const getTontinesRoutes = require('./routes/getTontine')

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

// Define tontine routes for adding tontine
app.use('/addTontine', addTontineRoutes);

// Define cotisation routes for adding cotisation
app.use('/addCotisation', addCotisationRoutes);

// Define cotisations routes for geting cotisations
app.use('/cotisations', getCotisationsRoutes);

// Define tontines routes for geting tontines
app.use('/tontines', getTontinesRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});