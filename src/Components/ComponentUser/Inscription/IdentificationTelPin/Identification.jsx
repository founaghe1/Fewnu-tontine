import React, { useState } from "react";
import "./Identification.css";
import { GiWallet } from "react-icons/gi";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Identification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://fewnu-tontin.onrender.com/auth/login', formData)
  .then((response) => {
    navigate('/mesCotisations');
  })
  .catch((err) => {
    console.error('Erreur de connexion :', err);
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
        </form>

        {/* <FooterImg /> */}
      </div>
    </div>
  );
};

export default Identification;
