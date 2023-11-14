const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const addTontineRoutes = require('./routes/addTontine');
const addCotisationRoutes = require('./routes/addCotisation');
const getCotisationsRoutes = require('./routes/getCotisation');
const getTontinesRoutes = require('./routes/getTontine');
const updateUser = require('./routes/updateUser');
const updatePassword = require('./routes/updateUser');
const participantTontine = require('./routes/addTontine');
const leaveTontine = require('./routes/addTontine');
const updateTontineParticipation = require('./routes/addTontine');
const getParticipant = require('./routes/getParticipant');
const checkParticipationStatus = require('./routes/getCheckParticipant')

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

// Utilisez le routeur pour gérer les routes liées aux utilisateurs.
app.use('/updateUser', updateUser);

app.use('/updatePassword', updatePassword);

// Utiliser le routeur pour gérer les routes liées à la participation de l'utilisateur à une tontine
app.use("/participateTontine", participantTontine);

// Utiliser le routeur pour gérer les routes liées au départ d'un utilisateur d'une tontine
app.use("/leaveTontine", leaveTontine);
// Utiliser le routeur pour gérer les routes liées à la modification des informations sur sa participation à une tontine
app.use('/updateTontineParticipations', updateTontineParticipation);
// Utiliser le routeur pour gérer les routes liées aux participants d'une tontine
app.use("/getParticipants", getParticipant);

app.use("/checkParticipation", checkParticipationStatus)




// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});