import React from 'react'
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
      ];
      
      console.log(cardsData);
      
    
  return ( 
    <Layout> 
    <div id='Cotisation'>
      <div className="container-fluid pt-3 d-flex justify-content-center flex-column">
        <div className='d-flex justify-content-center '>
          <Progression/>
        </div>
        <Link to='/tontine' className='link'>
            {cardsData.map((card) => (
              <Carte mois={card.tontine} montant={card.montant} date={card.date} heure={card.heure} statut={card.statut}/>
            ))}
        </Link>
      </div>
    </div>
    </Layout>
  )
}

export default Cotisation
