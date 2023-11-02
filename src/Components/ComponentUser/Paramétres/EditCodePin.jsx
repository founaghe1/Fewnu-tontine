import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Edit.css';
import HeaderProfil from '../Profil/HeaderProfil';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Layout from '../Layout/Layout';

const EditCodePin = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Récupérez l'ID de l'utilisateur depuis le stockage local
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userID = userData.user._id;
  
    try {
      // Utilisez l'ID de l'utilisateur pour construire l'URL de la requête API
      const url = `https://fewnu-tontin.onrender.com/updateUser/updateUser/${userID}`;
  
      const response = await axios.put(url, {
        oldPassword,
        newPassword,
      });
  
      if (response.data.success) {
        // Mot de passe modifié avec succès
        toast.success('Mot de passe modifié avec succès');
  
        // Mise à jour la propriété "password" du tableau "user" dans le local storage
        userData.user.password = newPassword; 
        // Mise à jour du mot de passe
        localStorage.setItem("userData", JSON.stringify(userData));
  
      } else {
        // Gérer les erreurs
        toast.error(`Échec de la modification du mot de passe : ${response.data.message}`);
      }
    } catch (error) {
      // Gérer les erreurs
      toast.error('Erreur de modification du mot de passe');
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
          <form className="px-3 form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Actuel mot de passe
              </label>
              <input
                type="password"
                placeholder="Actuel mot de passe"
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
                type="password"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
              <button type="submit" id="Edit-button" className="px-3">
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
