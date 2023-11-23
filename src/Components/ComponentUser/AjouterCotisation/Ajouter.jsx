import React, { useState, useEffect } from "react";
import "./Ajouter.css";
import HeaderProfil from "../Profil/HeaderProfil";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Ajouter = () => {
  const [tontineCot, setTontineCot] = useState([]);
  const [selectedTontine, setSelectedTontine] = useState("");
  const [cotisation, setCotisation] = useState("");
  const [userId, setUserId] = useState("");
  const [mensuel, setMensuel] = useState(false);
  const [global, setGlobal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer le téléphone de l'utilisateur connecté depuis l'API
    axios
      .get("https://fewnu-tontin.onrender.com/user/profile")
      .then((response) => {
        const phoneNumberConnectedUser = response.data[0].phoneNumber;
        setUserId(response.data[0]._id);

        const currentUser = response.data.find(
          (user) => user.phoneNumber === phoneNumberConnectedUser
        );

        if (currentUser) {
          const userId = currentUser._id;
          setUserId(userId);
        } else {
          console.error(
            "Utilisateur connecté non trouvé dans la réponse de l'API"
          );
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tontines", error);
      });
  }, []);

  useEffect(() => {
    // Récupérer les tontines depuis l'API
    axios
      .get("https://fewnu-tontin.onrender.com/tontines/getTontines")
      .then((response) => {
        setTontineCot(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tontines", error);
      });
  }, []);

  const handleAddCotisation = (e) => {
    e.preventDefault();
    // Valider les données du formulaire ici
    if (cotisation.trim() !== "" && selectedTontine !== "") {
      const cotisationData = {
        tontineCot: selectedTontine,
        cotisation: cotisation,
        userId: userId,
        modePaiement: {
          mensuel: mensuel,
          global: global,
        },
      };
      navigate("/validerAjout", { state: { cotisationData } });
    }
  };

  return (
    <Layout>
      <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
        <HeaderProfil />
        <h3 className="text-center">Ajouter une cotisation</h3>
        <form
          className="d-flex justify-content-center forme"
          onSubmit={handleAddCotisation}
        >
          <div className="Inputs">
            <div className=" my-5">
              <select
                className="form-select text-red mb-4"
                value={selectedTontine}
                onChange={(e) => setSelectedTontine(e.target.value)}
                aria-label="Default select example"
                placeholder="Sélectionner la tontine"
              >
                <option className="select-option" value="">
                  Sélectionner la tontine
                </option>
                {tontineCot.map((tontine) => (
                  <option key={tontine} value={tontine}>
                    {tontine}
                  </option>
                ))}
              </select>

              <div className="input-group flex-nowrap">
                <input
                  type="number"
                  value={cotisation}
                  onChange={(e) => setCotisation(e.target.value)}
                  placeholder="Montant de la cotisation"
                  className="form-control"
                  aria-label="Montant de la cotisation"
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
                  id="cotisationMensuelle"
                />
                <label className="form-check-label" htmlFor="cotisationMensuelle">
                  Cotisation mensuelle
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  checked={global}
                  onChange={() => setGlobal(!global)}
                  id="cotisationGlobale"
                />
                <label className="form-check-label" htmlFor="cotisationGlobale">
                  Cotisation globale
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="text-capitalize pay-button"
                onClick={handleAddCotisation}
              >
                passer au payement
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Ajouter;
