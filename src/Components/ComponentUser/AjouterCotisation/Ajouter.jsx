import React from "react";
import "./Ajouter.css";
import HeaderProfil from "../Profil/HeaderProfil";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const Ajouter = () => {
  const [tontineCot, setTontineCot] = useState([]);
  const [selectedTontine, setSelectedTontine] = useState('');
  const [cotisation, setCotisation] = useState('');
  const [phoneNumberCot, setPhoneNumberCot] = useState('');
  const [mensuel, setMensuel] = useState();
  const [global, setGlobal] = useState();
  const navigate = useNavigate(); // Pour la redirection

  useEffect(() => {
    // Récupérer les tontines depuis l'API
      axios.get("https://fewnu-tontin.onrender.com/user/profile")
        .then((response) => {
          const userId = response.data[0].phoneNumber;
          setPhoneNumberCot(userId);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des tontines', error);
        });
    }, []);

  useEffect(() => {
  // Récupérer les tontines depuis l'API
    axios.get("https://fewnu-tontin.onrender.com/tontines/getTontines")
      .then((response) => {
        setTontineCot(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tontines', error);
      });

    }, []);


  const handleAddCotisation = () => {
    // Validez les données du formulaire ici
    if (cotisation.trim() !== '' && selectedTontine !== '') {
      const cotisationData = {
        tontineCot: selectedTontine,
        cotisation: cotisation,
        phoneNumberCot: phoneNumberCot,
        modePaiement: {
          mensuel: mensuel,
          global: global,
        },
      };
      console.log(cotisationData);
      // Ici, nous allons stocker temporairement les données dans le stockage local.
      localStorage.setItem('cotisationData', JSON.stringify(cotisationData));

      // Redirigez vers la page "validerAjout"
      navigate('/validerAjout');
    }
  };
  
 
  return (
    <Layout>
    <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
      <HeaderProfil />
      <h3 className="text-center">Ajouter une cotisation</h3>
      <form className="d-flex justify-content-center forme" onSubmit={handleAddCotisation}> 
        <div className="Inputs">
        <div className=" my-5"> 
        <select className="form-select text-red mb-4" 
        value={selectedTontine}
          onChange={(e) => setSelectedTontine(e.target.value)}
         aria-label="Default select example" placeholder="selectionner le tontine">
           <option className="select-option" value="">Sélectionner la tontine</option>
          {tontineCot.map((tontine) => (
            <option key={tontine.id} value={tontine.tontine}>{tontine.tontine}</option>
          ))}
        </select>
        <div className="input-group flex-nowrap">
          <input
           type="number"
           value={cotisation}
           onChange={(e) => setCotisation(e.target.value)}
           placeholder="Montant de la cotisation"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div className="mb-5">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            checked={mensuel}
            onChange={() => setMensuel(!mensuel)}
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Cotisation mensuelle
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            checked={global}
            onChange={() => setGlobal(!global)}
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Cotisation globale
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-center">
          <button type="submit" 
          className="text-capitalize pay-button" onClick={handleAddCotisation}>passer au payement</button>
      </div>
        </div>
      </form>
    </div>
    </Layout>
  );
};


export default Ajouter;
