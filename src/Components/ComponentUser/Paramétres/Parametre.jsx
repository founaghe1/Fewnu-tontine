import React from 'react'
import './Parametre.css'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'


const Parametre = () => {
  return (
    <Layout>
    <div className='container mx-auto'>
      <div className='py-5 px-4'>
        <p className='text-capitalize title-sec '>profil</p>
        <div className="justify-content-center">
            <div className='mb-3'>
                <Link to='/profil' className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <p>Informations générales</p>
                </div>
                </Link>
            </div>    
            <div className='mb-3'>
                <Link to='/modifInfoGeneral' className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <p>Modifier les informations générales</p>
                </div>
                </Link>
            </div>    
            <div className='mb-3'>
                <Link to='/modifCodePin' className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <p>Modifier code PIN</p>
                </div>
                </Link>
            </div>    
        </div>
        <p className='text-capitalize title-sec '>support</p>
        <div className="justify-content-center">
            <div className='mb-3'>
                <Link className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <p>Contact par téléphone</p>
                </div>
                </Link>
            </div>    
            <div className='mb-3'>
                <Link className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <p>Contact par whatsapp</p>
                </div>
                </Link>
            </div>    
            <div className='mb-5'>
                <Link className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <p>Devenir administrateur</p>
                </div>
                </Link>
            </div>    
            <div className='mb-3'>
                <Link className='text-decoration-none text-dark'>
                <div className='item-sec'>
                    <Link to='/connection' className='text-dark text-decoration-none'>
                        <p>Se déconnecter</p>
                    </Link>
                </div>
                </Link>
            </div>    
        </div>
        
      </div>
    </div>
    </Layout>
  )
}

export default Parametre
