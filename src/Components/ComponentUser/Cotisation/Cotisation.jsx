import React from 'react'
import './Cotisation.css'
import Progression from './Progression'
import Carte from './Carte'

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
      
      console.log(cardsData);
      
    
  return (
    <div id='Cotisation'>
      <div className="container-fluid pt-3">
        <Progression/>
        {cardsData.map((card) => (
              <Carte mois={card.tontine} montant={card.montant} date={card.date} heure={card.heure} statut={card.statut}/>
            ))}
      </div>
    </div>
  )
}

export default Cotisation
