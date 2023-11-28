import React, { useEffect, useState } from "react";
import "./Cotisation.css";
import Progression from "./Progression";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cotisation = () => {
  const [cotisations, setCotisations] = useState([]);
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('userData')); 

  const handleCardClick = (tontineId) => {
    navigate(`/tontine/${encodeURIComponent(tontineId)}`);
  };

  useEffect(() => {
    axios
      .get("https://fewnu-tontin.onrender.com/cotisations/getCotisations")
      .then((response) => {
        const sortedCotisations = response.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        // Filter cotisations based on the stored user's ID
        const userCotisations = sortedCotisations.filter(
          (cotisation) => cotisation.user === storedUser.user._id
        );
        console.log("userCotisations: ", userCotisations);
        console.log(storedUser);

        setCotisations(userCotisations);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des cotisations", error);
      });
  }, [storedUser._id]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  const formatTime = (dateString) => {
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return new Date(dateString).toLocaleTimeString("fr-FR", options);
  };

  return (
    <Layout>
      <div id="Cotisation">
        <div className="container-fluid pt-3 d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center ">
            <Progression />
          </div>
          <div className="d-flex justify-content-center flex-column">
            {cotisations.map((cotisation) => (
              <div
                key={cotisation.id}
                onClick={() => handleCardClick(cotisation.tontine)}
              >
                <div className="d-flex justify-content-center">
                  <div className="carteWidth d-flex justify-content-center">
                    <div className="carte rounded-4 mb-3  d-flex">
                      <div className="left-side rounded-start-4 "></div>
                      <div className="right-side py-3 px-3">
                        <div className="top d-flex justify-content-between">
                          <p className="mois text-capitalize fw-bold">
                            {cotisation.tontine}
                          </p>
                          <p className="montant text-uppercase">
                            {cotisation.cotisation}F
                          </p>
                        </div>
                        <div className="bottom d-flex justify-content-between">
                          <p className="fw-bold">
                            {formatDate(cotisation.createdAt)}
                            <span className="mx-2">
                              {formatTime(cotisation.createdAt)}
                            </span>
                          </p>
                          <p className="statut text-capitalize">Valide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cotisation;
