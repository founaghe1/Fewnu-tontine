import React from 'react'
import './Accueil.css'
import Image from '../../../Assets/home-img.png';
import { Link } from 'react-router-dom'
import {BiSolidDownload} from 'react-icons/bi'


 
const Accueil = () => { 


  if ('beforeinstallprompt' in window) {
    // L'événement beforeinstallprompt est pris en charge, ce qui signifie que l'application peut être installée.
    // Vous pouvez afficher une invite d'installation lorsque cela se produit.
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';
  
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault(); // Empêche l'invite par défaut de s'afficher
      const promptEvent = event;
  
      installButton.addEventListener('click', () => {
        promptEvent.prompt(); // Affiche l'invite d'installation
        promptEvent.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('L\'application a été installée.');
          }
        });
      });
    });
  }


  return ( 
    <div id='Accueil' className='vh-100'>
      <div className="container pt-2  text-center">
        <h1 className='text-light title1 mb-4 px-2'>Bienvenue sur <br /> Fewnu tontine</h1>
        <div className='mb-5'>
            <img src={Image} alt="" className='img-fluid'/>
        </div>
        <div className="d-flex gap-3 justify-content-center">
        <Link to="/idParCall">
          <button className='loginButton px-2 py-1'>Connectez-vous</button>
        </Link>
        <button id='install-button'>
          <BiSolidDownload className='downloadButton '/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Accueil
