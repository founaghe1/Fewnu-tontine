import React, { useState, useEffect } from "react";
import "./Accueil.css";
import Image from "../../../Assets/home-img.png";
import { Link } from "react-router-dom";
import { BiSolidDownload } from "react-icons/bi";

const Accueil = () => {
  
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  let promptEvent = null;

  useEffect(() => {
    if ('beforeinstallprompt' in window) {
      

      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        promptEvent = event;
        setShowInstallBanner(true);
      });
    }
  }, []);

  const handleInstallClick = () => {
    if (promptEvent) {
      promptEvent.prompt();
      promptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log("L'application a été installée.");
          setShowInstallBanner(false);
        }
      });
    }
  };

  return (
    <div id="Accueil" className="vh-100">
      {showInstallBanner && (
        <div className="install-banner">
          <button onClick={handleInstallClick}>Installer l'application</button>
          <button onClick={() => setShowInstallBanner(false)}>Fermer</button>
        </div>
      )}
      <div className="container pt-2  text-center">
        <h1 className="text-light title1 mb-4 px-2">
          Bienvenue sur <br /> Fewnu tontine
        </h1>
        <div className="mb-5">
          <img src={Image} alt="" className="img-fluid" />
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/idParCall">
            <button className="login-button px-2 py-1">Connectez-vous</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accueil;