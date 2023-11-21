import React, { useEffect, useState } from 'react';
import './Tontine.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout/Layout';
import CarteTontine from './CarteTontine';
import Progression from '../Cotisation/Progression';
import AjoutCotisation from './AjoutCotisation';

const Tontine = () => {
  const { tontineId } = useParams();
  const [cotisations, setCotisations] = useState([]);
  const navigate = useNavigate();
  const [tontineName, setTontineName] = useState('');
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://fewnu-tontin.onrender.com/getCotisationsByTontine/getCotisationsByTontine/${tontineId}`
      )
      .then((response) => {
        const sortedCotisations = response.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        setCotisations(sortedCotisations);

        // Calculate the total sum of cotisations
        const sum = sortedCotisations.reduce(
          (accumulator, cotisation) => accumulator + cotisation.cotisation,
          0
        );
        setTotalSum(sum);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des cotisations de la tontine', error);
      });
  }, [tontineId]);

  const handleCardClick = (tontineId) => {
    navigate(`/tontine/${encodeURIComponent(tontineId)}`);
  };

  // useEffect(() => {
  //   // Fetch the tontine name from your API using tontineId
  //   // Update setTontineName with the fetched name
  //   axios
  //     .get(`https://fewnu-tontin.onrender.com/getCotisationsByTontine/getCotisationsByTontine/${tontineId}`)
  //     .then((response) => {
  //       setTontineName(response.data.tontine);
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors de la récupération du nom de la tontine', error);
  //     });
  // }, [tontineId]);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleTimeString('fr-FR', options);
  };

  return (
    <Layout>
      <div id="Cotisation">
        <div className="container-fluid pt-3 d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-center ">
            <div className="container-fluid pt-3 page-totine d-flex justify-content-center ">
              <div className="d-flex flex-column justify-content-center cart">
                <AjoutCotisation tontineName={tontineName}  totalSum={totalSum} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-column ">
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

export default Tontine;
