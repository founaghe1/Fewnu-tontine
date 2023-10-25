import React from 'react'
import "./Tontine.css"
import AjoutCotisation from './AjoutCotisation'
import CarteTontine from './CarteTontine';
import wave from '../../../Assets/wave.png'
import orange from '../../../Assets/orange-money.png'
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

const Tontine = () => {
    const cardsData = [
        {
          mois: 'Janvier',
          via: wave,
          montant: 25000,
          date: '05-01-2022',
          heure: '14:30:00',
          statut: 'validé'
        },
        {
          mois: 'Février',
          via: wave,
          montant: 25000,
          date: '05-02-2022',
          heure: '10:15:00',
          statut: 'validé'
        },
        {
          mois: 'Mars',
          via: orange,
          montant:25000,
          date: '05-03-2022',
          heure: '16:45:00',
          statut: 'validé'
        },
        {
          mois: 'Avril',
          via: wave,
          montant: 25000,
          date: '05-04-2022',
          heure: '09:00:00',
          statut: 'En attente'
        },
        {
          mois: 'Mai',
          via: orange,
          montant:25000,
          date: '05-05-2022',
          heure: '13:45:00',
          statut: 'En attente'
        },
        {
          mois: 'Juin',
          via: wave,
          montant: 25000,
          date: '05-06-2022',
          heure: '11:30:00',
          statut: 'En attente'
        },
        {
          mois: 'Juillet',
          via: wave,
          montant: 25000,
          date: '05-07-2022',
          heure: '18:20:00',
          statut: 'validé'
        },
        {
          mois: 'Août',
          via: orange,
          montant: 25000,
          date: '05-08-2022',
          heure: '22:15:00',
          statut: 'En attente'
        },
        {
          mois: 'Septembre',
          via: wave,
          montant: 25000,
          date: '05-09-2022',
          heure: '17:10:00',
          statut: 'En attente'
        },
        {
          mois: 'Octobre',
          via: orange,
          montant: 25000,
          date: '05-10-2022',
          heure: '08:45:00',
          statut: 'En attente'
        },
        {
          mois: 'Novembre',
          via: wave,
          montant:25000,
          date: '05-11-2022',
          heure: '14:00:00',
          statut: 'En attente'
        },
        {
          mois: 'Décembre',
          via: orange,
          montant: 25000,
          date: '05-12-2022',
          heure: '10:30:00',
          statut: 'En attente'
        }
      ];
      
  return ( 
    <Layout>
    <div className='container-fluid pt-3 page-totine d-flex justify-content-center '>
      <div className='d-flex flex-column justify-content-center cart'>
      <AjoutCotisation/>
      <Link to='/detailCotisation' className='text-decoration-none text-dark'>
        {cardsData.map((card) => (
              <CarteTontine mois={card.mois} via={card.via} montant={card.montant} date={card.date} heure={card.heure} statut={card.statut}/>
            ))}
      </Link> 
      </div>
    </div>
    </Layout>
  )
}

export default Tontine
