import React from 'react'
import './Accueil.css'
import Image from '../../../Assets/home-img.png';
import { Link } from 'react-router-dom'
import {BiSolidDownload} from 'react-icons/bi'
 
const Accueil = () => { 
  return (
    <div id='Accueil' className='vh-100'>
      <div className="container pt-2  text-center">
        <h1 className='text-light title mb-4 px-2'>Bienvenue sur Fewnu tontine</h1>
        <div className='mb-5'>
            <img src={Image} alt="" className='img-fluid'/>
        </div>
        <div className="d-flex gap-3 justify-content-center">
        <Link to="/idParCall">
          <button className='loginButton px-2 py-1'>Connectez-vous</button>
        </Link>
        <Link to="/cotisation">
          <BiSolidDownload className='downloadButton '/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Accueil
