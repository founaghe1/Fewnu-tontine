import React, { useEffect, useState } from 'react';
import './Cotisation.css'
import Progression from './Progression'
// import Carte from './Carte';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cotisation = () => {
  const [cotisations, setCotisations] = useState([]);

  useEffect(() => {
    // Effectuer une requête GET pour récupérer les cotisations depuis l'API
    axios.get("https://fewnu-tontin.onrender.com/cotisations/getCotisations")
      .then((response) => {
        // setCotisations(response.data);
        // console.log(response.data)
        const sortedCotisations = response.data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setCotisations(sortedCotisations);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des cotisations', error);
      });
  }, []);

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
    <div id='Cotisation'>
      <div className="container-fluid pt-3 d-flex justify-content-center flex-column">
        <div className='d-flex justify-content-center '>
          <Progression/>
        </div>
        <Link to='/tontine' className='link'>
        {cotisations.map((cotisation) => (
          <div className='d-flex justify-content-center'>
              <div className='carteWidth d-flex justify-content-center'>
                <div className='carte rounded-4 mb-3  d-flex'>
                  <div className='left-side rounded-start-4 '>
                  </div>
                  <div className='right-side py-3 px-3'>
                    <div key={cotisation.id} className="top d-flex justify-content-between">
                        <p className="mois text-capitalize fw-bold">{cotisation.tontine}</p>
                        <p className="montant text-uppercase">{cotisation.cotisation}F</p>
                    </div>
                    <div className="bottom d-flex justify-content-between">
                    <p className='fw-bold'>{formatDate(cotisation.createdAt)}<span className='mx-2'>{formatTime(cotisation.createdAt)}</span></p>
                        <p className="statut text-capitalize">Valide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
    </Layout>
  )
}

export default Cotisation

{/* {cardsData.map((card) => (
              <Carte mois={card.tontine} montant={card.montant} date={card.date} heure={card.heure} statut={card.statut}/>
            ))} */}