import React from 'react';
import './detailcotisation.css';
import Layout from '../../Layout/Layout';
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Button  from '../../Button/Button';

const Detailcotisation = () => {
  return (
    
        <Layout>
        <div className=''>
            <div className='pt-2'>
                <span className=''> <MdKeyboardArrowLeft className=' arrow' /> </span>
                <span className="titreDetailCo text-center  px-5">Détails cotisations</span>
            </div>
            <div className='ps-4'>
                <div className='mois mt-4 py-3'>
                    <p className='moi'>Mois</p>
                    <p className='moisCotis'>Avril</p>
                </div>
                <div className='heures py-3'>
                    <p className='heure'>Heure</p>
                    <p className='heureCotis'>22h 30</p>
                </div>
                <div className='montants py-3'>
                    <p className='montant'>Montant</p>
                    <p className='montantCotis'>25000 FCFA</p>
                </div>
                <div className='statuts py-3'>
                    <p className='statut'>Statut</p>
                    <p className='statutCotis'>En attente</p>
                </div>
            </div>
            <div className='text-center mb-4'>
                <Button libelet="modifier" />
            </div>
        </div>
        </Layout>
    
  )
}

export default Detailcotisation