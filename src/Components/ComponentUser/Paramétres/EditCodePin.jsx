import React, { useEffect, useState } from 'react';
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


const handleUpdatePW = () => {
  const updatedPassword = {
    newPassword,
  };

  // Récupérez l'userId de l'utilisateur connecté depuis le localStorage
  const storedUser = localStorage.getItem("userData");
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    const userId = userData.user._id;

    console.log("userId : ",userData.user._id);

    // Effectuez une requête HTTP PUT pour mettre à jour le profil de l'utilisateur.
    axios.put(`https://fewnu-tontin.onrender.com/updateUser/updateUser/${userId}`, updatedPassword)
      .then((response) => {
          // Mise à jour des données dans le localStorage
          userData.user.password = updatedPassword.newPassword;
          localStorage.setItem("userData", JSON.stringify(userData));

          // Affichez un toast de succès
          toast.success("Mis à jour du mot de passe avec succès", {
              position: toast.POSITION.TOP_CENTER, // Position du toast
          });

          // Gérez la réponse de l'API ici (affichez un message de succès au console).
          console.log(response.data);
      })
      .catch((error) => {
        // Gérez les erreurs ici (par exemple, affichez un message d'erreur).
        console.error(error);
      });
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
          <form className="px-3 form" >
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
              <button type="button"  id="Edit-button" className="px-3" onClick={handleUpdatePW}>
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
