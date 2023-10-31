import React from "react";
import "./Accueil.css";
import Image from "../../../Assets/home-img.png";
import { Link } from "react-router-dom";
import { BiSolidDownload } from "react-icons/bi";
import { useEffect } from 'react';

const Accueil = () => {


  useEffect(() => {
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    if ('beforeinstallprompt' in window) {
      const promptEvent = null;

      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        promptEvent = event;
      });

      installButton.addEventListener('click', () => {
        if (promptEvent) {
          promptEvent.prompt();
          promptEvent.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log("L'application a été installée.");
            }
          });
        }
      });
    }
  }, []);



  return (
    <div id="Accueil" className="vh-100">
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
          <button id="install-button">Installer l'application</button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
