import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Edit.css';
import HeaderProfil from '../Profil/HeaderProfil';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Layout from '../Layout/Layout';
import bcrypt from 'bcryptjs';

const EditCodePin = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // const navigate = useNavigate();

  const handleCheckPassword = async () => {
    try {
      // Effectuez une requête pour vérifier le mot de passe actuel
      const response = await axios.post('https://fewnu-tontin.onrender.com/updateUser/updateUser', {
        oldPassword,
      });

      if (response.data.success) {
        // Mot de passe actuel correct, maintenant mettez à jour le mot de passe
        handleUpdatePassword();
      } else {
        // Mot de passe actuel incorrect, affichez un message d'erreur
        toast.error('Mot de passe actuel incorrect');
      }
    } catch (error) {
      toast.error('Erreur de vérification du mot de passe actuel');
    }
  };

  const handleUpdatePassword = async () => {
    const updatedPassword = {
      newPassword,
    };

    // Récupérez l'userId de l'utilisateur connecté depuis le localStorage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      try {
        // Effectuez une requête HTTP PUT pour mettre à jour le mot de passe de l'utilisateur.
        const response = await axios.put(`https://fewnu-tontin.onrender.com/updateUser/updateUser/${userId}`, updatedPassword);
        console.log(response);

        // Mise à jour des données dans le localStorage
        userData.user.password = updatedPassword.newPassword;
        localStorage.setItem("userData", JSON.stringify(userData));

        // Demander à l'utilisateur de se reconnecter avec le nouveau mot de passe
        toast.success("Mot de passe mis à jour avec succès. Veuillez vous reconnecter avec le nouveau mot de passe.");

        // Gérez la réponse de l'API ici (affichez un message de succès dans la console).
        console.log(response.data);
      } catch (error) {
        // Gérez les erreurs ici (par exemple, affichez un message d'erreur à l'utilisateur).
        console.error(error);
        toast.error("Échec de la mise à jour du mot de passe. Vérifiez vos informations.");
      }
    }
  };

  return (
    <Layout>
      <div id="edit-code" className="">
        <span className="ps-3">
          <Link to="/parametres">
            <MdKeyboardArrowLeft className="retour" />
          </Link>
        </span>
        <div className="d-flex justify-content-center">
          <HeaderProfil />
        </div>
        <h1>Modifier votre code PIN</h1>
        <div className="container d-flex justify-content-center">
          <form className="px-3 form">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Ancien mot de passe
              </label>
              <input
                type=""
                placeholder="Ancien mot de passe"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Nouveau mot de passe
              </label>
              <input
                type="text"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
              <button type="button" id="Edit-button" className="px-3" onClick={handleCheckPassword}>
                Mettre à jour
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default EditCodePin;
