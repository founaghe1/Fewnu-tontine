const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// Définit un schéma MongoDB pour l'entité "User".
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: false
    },
    lastName: {
      type: String,
      required: true,
      unique: false
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    participatingTontines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tontine', // Assuming your tontine model is named 'Tontine'
      },
    ],
  },
  { timestamps: true }
);

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    
    next();
  } catch (error) {
    return next(error);
  }
});

    
// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  console.log('uuu', this.password);
  console.log("vvv",password)
  return bcrypt.compare(password, this.password);
};

// Crée un modèle Mongoose appelé "User" à partir du schéma défini ci-dessus.  
const User = mongoose.model('User', userSchema);
  
module.exports = User;