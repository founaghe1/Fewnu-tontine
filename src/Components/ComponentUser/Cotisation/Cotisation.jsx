import React, { useEffect, useState } from 'react';
import './Cotisation.css'
import Progression from './Progression'
import Carte from './Carte';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

const Cotisation = () => {
    const cardsData = [
        {
          tontine: 'tontine téléphone',
          montant: 25000,
          date: '05-01-2022',
          heure: '14:30:00',
          statut: 'validé'
        },
        {
          tontine: 'tontine greffage',
          montant: 25000,
          date: '05-02-2022',
          heure: '10:15:00',
          statut: 'validé'
        },
        {
          tontine: 'tontine ordinateur',
          montant:25000,
          date: '05-03-2022',
          heure: '16:45:00',
          statut: 'validé'
        },
        // {
        //   tontine: 'Avril',
        //   montant: 25000,
        //   date: '05-04-2022',
        //   heure: '09:00:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Mai',
        //   montant:25000,
        //   date: '05-05-2022',
        //   heure: '13:45:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Juin',
        //   montant: 25000,
        //   date: '05-06-2022',
        //   heure: '11:30:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Juillet',
        //   montant: 25000,
        //   date: '05-07-2022',
        //   heure: '18:20:00',
        //   statut: 'validé'
        // },
        // {
        //   tontine: 'Août',
        //   montant: 25000,
        //   date: '05-08-2022',
        //   heure: '22:15:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Septembre',
        //   montant: 25000,
        //   date: '05-09-2022',
        //   heure: '17:10:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Octobre',
        //   montant: 25000,
        //   date: '05-10-2022',
        //   heure: '08:45:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Novembre',
        //   montant:25000,
        //   date: '05-11-2022',
        //   heure: '14:00:00',
        //   statut: 'En attente'
        // },
        // {
        //   tontine: 'Décembre',
        //   montant: 25000,
        //   date: '05-12-2022',
        //   heure: '10:30:00',
        //   statut: 'En attente'
        // }
      ];
      
      // console.log(cardsData);
  const [cotisations, setCotisations] = useState({});

  useEffect(() => {
    const storedCotisations = JSON.parse(localStorage.getItem('cotisations')) || {};
    setCotisations(storedCotisations);
  }, []);
      
    
  return ( 
    <Layout> 
    <div id='Cotisation'>
      <div className="container-fluid pt-3 d-flex justify-content-center flex-column">
        <div className='d-flex justify-content-center '>
          <Progression/>
        </div>

        <Link to='/tontine' className='link'>
          {Object.keys(cotisations).map((tontine) => (
            <div className="card shadow mx-3">
              <div className="d-flex justify-content-between mt-2 p-2 ">
                <p className='fs-5 fw-bold'>{tontine}</p>
                {cotisations[tontine].map((cotisation, index) => (
                  <p className='fw-bold' key={index}>{cotisation}</p>
                ))}
              </div>
              <div className="d-flex justify-content-between p-2">
                  <p className='fw-bold'>05-02-2022 a <span>16:45:00</span></p>
                  <p className='fw-bold'>validé</p>
              </div> 
            </div>
            ))};   
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