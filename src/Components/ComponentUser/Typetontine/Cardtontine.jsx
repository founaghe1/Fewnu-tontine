import React, { useEffect, useState } from "react";
import "./tontine.css";
import axios from 'axios';

const Cardtontine = (props) => {
  const [isParticipating, setIsParticipating] = useState(props.isParticipating);

  useEffect(() => {
    setIsParticipating(props.isParticipating);
  }, [props.isParticipating]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      if (isParticipating) {
        await props.onLeave();
      } else {
        await props.onParticipate();
      }
      setIsParticipating(!isParticipating);
    } catch (error) {
      console.error('Erreur lors du traitement du bouton :', error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="carte rounded-4 mb-3 d-flex">
        <div className="left-side rounded-start-4"></div>
        <div className="right-side py-2 px-3">
          <div className="top d-flex justify-content-between align-items-center mt-2 mb-1">
            <p className="titreC">{props.titre}</p>
            <button
              onClick={handleButtonClick}
              className={`btn ${isParticipating ? 'btn-danger' : 'btn-success'}`}
              aria-label={isParticipating ? 'Quitter' : 'Participer'}
            >
              {isParticipating ? 'Quitter' : 'Participer'}
            </button>
          </div>
          <div className="bottom d-flex justify-content-between">
            <p className="des">
              <span>{props.des}</span>
            </p>
            <p className="statut text-capitalize pe-2">{props.some}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardtontine;
