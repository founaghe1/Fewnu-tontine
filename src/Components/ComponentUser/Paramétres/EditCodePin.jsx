import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Edit.css';
import HeaderProfil from '../Profil/HeaderProfil';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Layout from '../Layout/Layout';
import bcrypt from 'bcryptjs';

const EditCodePin = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // useEffect(() => {
  //   // Récupérez le nom de l'utilisateur depuis le localStorage
  //   const storedUser = localStorage.getItem("userData");

  //   // Assurez-vous que les données existent et sont valides
  //   if (storedUser) {
  //     const userData = JSON.parse(storedUser);
  //     setOldPassword(userData.user.password); // Récupérez le mot de passe en clair
  //   }
  // }, []);

  const handleUpdatePW = async () => {
    const saltRounds = 10;

    try {

      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      // Récupérez l'ancien mot de passe stocké localement
      const storedUser = localStorage.getItem('userData');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        const oldStoredPassword = userData.user.password; // Ancien mot de passe

        // Comparez l'ancien mot de passe saisi avec l'ancien mot de passe stocké
        const isOldPasswordValid = await bcrypt.compare(oldPassword, oldStoredPassword);

        if (!isOldPasswordValid) {
          // Le mot de passe saisi ne correspond pas à l'ancien mot de passe
          toast.error('Ancien mot de passe incorrect', {
            position: toast.POSITION.TOP_CENTER,
          });
          return; // Ne continuez pas si l'ancien mot de passe est incorrect
        }

        const updatedPassword = {
          newPassword: hashedNewPassword,
        };
        console.log("newPasswor : ", hashedNewPassword);

        const userId = userData.user._id;

        console.log("userId : ", userId); 

        // Effectuez une requête HTTP PUT pour mettre à jour le mot de passe de l'utilisateur dans la base de données.
        axios.put(`https://fewnu-tontin.onrender.com/updatePassword/updatePassword/${userId}`, updatedPassword)
          .then((response) => {
            // Mise à jour des données dans le localStorage
            userData.user.password = updatedPassword.newPassword;
            localStorage.setItem('userData', JSON.stringify(userData));

            console.log("newPasswor2 : ", userData.user.password);

            // Affichez un toast de succès
            toast.success('Mise à jour du mot de passe avec succès', {
              position: toast.POSITION.TOP_CENTER,
            });

            // Gérez la réponse de l'API ici (affichez un message de succès au console).
            console.log(response.data);
          })
          .catch((error) => {
            // Gérez les erreurs ici (par exemple, affichez un message d'erreur).
            console.error(error);
          });
      }
    } catch (error) {
      // Gérez les erreurs ici (par exemple, affichez un message d'erreur).
      console.error(error);
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
              <button type="button" id="Edit-button" className="px-3" onClick={handleUpdatePW}>
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
