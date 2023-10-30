import React, { useState } from "react";
import "./Identification.css";
import { GiWallet } from "react-icons/gi";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import FooterImg from '../../FooterImg/FooterImg'

const Identification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  }); 

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault()

    //Commencer le chargement
    setLoading(true);

    axios.post('https://fewnu-tontin.onrender.com/auth/login', formData)
  .then((response) => {
    // Arrêtez le chargement en cas de réussite
    setLoading(false);

    // Extraction des informations utilisateur de la réponse
    const userData = response.data; 
    // Supposons que les informations sont dans response.data

    // Stockage des informations utilisateur dans le local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    navigate('/mesCotisations');
  })
  .catch((err) => {
    // Arrêtez le chargement en cas d'erreur
    setLoading(false);

    if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
        }
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
          <div className="text-center">
            <Input
              type="password"
              className="input px-3"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Mot de passe"
            />
          </div>
          <div className="text-center">
            <Button
              libelet="S’identifier"
              className="btnIdenti"
              type="submit"
            />
          </div>
          {loading && <p className="mt-5 text-secondary">Chargement en cours...</p>}
          {error && <p className="mt-3 text-danger">{error}</p>}
        </form>

        <FooterImg />
      </div>
    </div>
  );
};

export default Identification;