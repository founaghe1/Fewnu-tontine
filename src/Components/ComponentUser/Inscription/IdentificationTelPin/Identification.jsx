import React, { useState } from "react";
import "./Identification.css";
import { GiWallet } from "react-icons/gi";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import FooterImg from '../../FooterImg/FooterImg';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Identification = () => {
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState("");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  }); 

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Inverser l'état pour afficher ou masquer le mot de passe
  };

  const handleLogin = (e) => {
    e.preventDefault()

    //Commencer le chargement
    setLoading(true);

    axios.post('https://fewnu-tontin.onrender.com/auth/login', formData).then((response) => {
    // Arrêtez le chargement en cas de réussite
    setLoading(false);

    // Extraction des informations utilisateur de la réponse
    // Supposons que les informations sont dans response.data
    const userData = response.data; 
    
  
    // Stockage des informations utilisateur dans le local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    const role = userData.user.role;
    console.log(userData.user.role);
    setUserStatus(role);
    
   

      if (role === "user") {
        navigate("/mesCotisations");
        console.log(role);
      }
   

  }).catch((err) => {
    // Arrêtez le chargement en cas d'erreur
    setLoading(false);

    // Utilisez toast.error pour afficher le message d'erreur
    toast.error(
      err.response?.data?.message ||
        "Numéro téléphone ou mot de passe incorrect."
    );
  });
  };


  

  return (
    <div className="identif shadow">
      <div>
        <h4 className="text-center title">
          <span className="wallet">
            <GiWallet />
          </span>{" "}
          fewnu Tontine{" "}
        </h4>
        <form onSubmit={handleLogin}>
          <p className="paragIdentif text-center">Identifiez-vous</p>
          <p className="paragText text-center">
            Identifiez-vous et gérez vos cotisations
          </p>
          <div className="text-center">
            <Input
              type="text"
              className="input px-3"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Numéro de téléphone"
            />
          </div>
          <div className="text-center d-flex justify-content-center align-items-center">
          <div className="password-input-container d-flex justify-content-center align-items-center">
              <Input
                type={showPassword ? "text" : "password"} // Afficher le mot de passe comme texte si showPassword est vrai
                className="px-3"
                id="motDePasse"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mot de passe"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                id="password-toggle-button"
              >
                {showPassword ? <FaEyeSlash className="fs-5"/> : <FaEye className="fs-5"/>}
              </button>
            </div>
          </div>
          <div className="text-center">
            <Button
              libelet="S’identifier"
              className="btnIdenti"
              type="submit"
              
            />
          </div>
          {loading && <p className="mt-5 text-secondary">Chargement en cours...</p>}
          
        </form>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

        <FooterImg />
      </div>
    </div>
  );
};

export default Identification;