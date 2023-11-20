import React, { useEffect, useState } from 'react';
import './Accueil.css';
import Image from '../../../Assets/home-img.png';
import { Link } from 'react-router-dom';
import { BiSolidDownload } from 'react-icons/bi';

const Accueil = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault(); // Prevent the default behavior
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallAppClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('L\'application a été installée.');
        }
      } catch (error) {
        console.error('Erreur lors de l\'installation de l\'application :', error);
      }
    }
  };

  return (
    <div id='Accueil' className='vh-100'>
      <div className="container pt-2 text-center">
        <h1 className='text-light title1 mb-4 px-2'>Bienvenue sur Fewnu tontine</h1>
        <div className='mb-5'>
          <img src={Image} alt="" className='img-fluid' />
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/idParCall">
            <button className='loginButton px-2 py-1'>Connectez-vous</button>
          </Link>
          <button className='myBTN' id='installApp' onClick={handleInstallAppClick}>
            <BiSolidDownload className='downloadButton' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
