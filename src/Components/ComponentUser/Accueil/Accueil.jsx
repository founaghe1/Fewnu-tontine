import React from 'react'
import './Accueil.css'
import Image from '../../../Assets/home-img.png'

const Accueil = () => {
  return (
    <div id='Accueil' className='vh-100'>
      <div className="container py-5 text-center">
        <h1 className='text-light title mb-5'>Bienvenue sur Bakéli-totine</h1>
        <div className='mb-5'>
            <img src={Image} alt="" className='img-fluid'/>
        </div>
        <button className='btn default loginButton px-2 py-1'>Connectez-vous</button>
      </div>
    </div>
  )
}

export default Accueil
