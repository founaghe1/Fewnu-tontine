import React from 'react'
import './Cotisation.css'
import Progression from './Progression'
import Carte from './Carte';
import Layout from '../Layout/Layout';

const Cotisation = () => {
    const cardsData = [
        {
          mois: 'Janvier',
          montant: 25000,
          date: '05-01-2022',
          heure: '14:30:00',
          statut: 'validé'
        },
        {
          mois: 'Février',
          montant: 25000,
          date: '05-02-2022',
          heure: '10:15:00',
          statut: 'validé'
        },
        {
          mois: 'Mars',
          montant:25000,
          date: '05-03-2022',
          heure: '16:45:00',
          statut: 'validé'
        },
        {
          mois: 'Avril',
          montant: 25000,
          date: '05-04-2022',
          heure: '09:00:00',
          statut: 'En attente'
        },
        {
          mois: 'Mai',
          montant:25000,
          date: '05-05-2022',
          heure: '13:45:00',
          statut: 'En attente'
        },
        {
          mois: 'Juin',
          montant: 25000,
          date: '05-06-2022',
          heure: '11:30:00',
          statut: 'En attente'
        },
        {
          mois: 'Juillet',
          montant: 25000,
          date: '05-07-2022',
          heure: '18:20:00',
          statut: 'validé'
        },
        {
          mois: 'Août',
          montant: 25000,
          date: '05-08-2022',
          heure: '22:15:00',
          statut: 'En attente'
        },
        {
          mois: 'Septembre',
          montant: 25000,
          date: '05-09-2022',
          heure: '17:10:00',
          statut: 'En attente'
        },
        {
          mois: 'Octobre',
          montant: 25000,
          date: '05-10-2022',
          heure: '08:45:00',
          statut: 'En attente'
        },
        {
          mois: 'Novembre',
          montant:25000,
          date: '05-11-2022',
          heure: '14:00:00',
          statut: 'En attente'
        },
        {
          mois: 'Décembre',
          montant: 25000,
          date: '05-12-2022',
          heure: '10:30:00',
          statut: 'En attente'
        }
      ];
      
      console.log(cardsData);
      
    
  return (
    <Layout>
    <div id='Cotisation'>
      <div className="container-fluid pt-3">
        <Progression/>
        {cardsData.map((card) => (
              <Carte mois={card.mois} montant={card.montant} date={card.date} heure={card.heure} statut={card.statut}/>
            ))}
      </div>
    </div>
    </Layout>
  )
}

export default Cotisation
