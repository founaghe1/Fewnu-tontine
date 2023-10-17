import React, { useState, useEffect } from "react";
import "./Identification.css";
import { GiWallet } from "react-icons/gi";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import FooterImg from "../../FooterImg/FooterImg";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Cotisation from "../../Cotisation/Cotisation";

const Indentification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Verification s'il y a des identifiants de connexion dans le Local Storage
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedPassword = localStorage.getItem("password");
    if (storedPhoneNumber && storedPassword) {
      // Si des identifiants sont présents, remplissez le formulaire et essayez automatiquement de vous connecter
      setFormData({ phoneNumber: storedPhoneNumber, password: storedPassword });
      handleLogin(storedPhoneNumber, storedPassword);
    }
  }, []); // Le tableau vide signifie que cela s'exécute une seule fois au chargement de la page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fakeUserData = {
    phoneNumber: "771010502",
    password: "thiam123",
  };

  const handleLogin = (enteredPhoneNumber, enteredPassword) => {
    if (
      enteredPhoneNumber === fakeUserData.phoneNumber &&
      enteredPassword === fakeUserData.password
    ) {
      setLoggedIn(true);
      setError("");
      // Stockez les identifiants dans le Local Storage après une connexion réussie
      localStorage.setItem("phoneNumber", enteredPhoneNumber);
      localStorage.setItem("password", enteredPassword);

      // Redirigez l'utilisateur vers la page de cotisation après une connexion réussie
      navigate("/mesCotisations");
    } else {
      setLoggedIn(false);
      setError("Numero téléphone ou mot de passe incorrect.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phoneNumber, password } = formData;
    handleLogin(phoneNumber, password);
    console.log(phoneNumber);
    console.log(password);
  };
  return (
    <div className="identif shadow">
      {loggedIn ? (
        <Cotisation />
      ) : (
        <div>
          <h4 className="text-center title">
            <span className="wallet">
              <GiWallet />
            </span>{" "}
            fewnu Tontine{" "}
          </h4>
          <form onSubmit={handleSubmit}>
            <p className="paragIdentif text-center">Identifiez-vous</p>
            <p className="paragText text-center">
              Identifiez-vous et gérez vos cotisations
            </p>
            <div className="text-center">
              <Input
                placeholder="N° téléphone"
                className="input px-3"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
              />
            </div>
            <div className="text-center">
              <Input
                placeholder="Mot de passe"
                className="input px-3"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <div className="text-center">
              <Button libelet="S’identifier" className="btnIdenti" />
              {error && <p className="error text-danger mt-3">{error}</p>}
            </div>
          </form>

          {/* <FooterImg /> */}
        </div>
      )}
    </div>
  );
};

export default Indentification;
