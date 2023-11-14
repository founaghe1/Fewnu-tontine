import React, { useEffect, useState } from "react";
import "./tontine.css";
import axios from 'axios';

const Cardtontine = (props) => {
  const [isParticipating, setIsParticipating] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const parsedUserData = storedUser ? JSON.parse(storedUser) : null;
    setUserData(parsedUserData);
  
    // Assurez-vous que props.participants est défini avant d'utiliser includes
    setIsParticipating(
      parsedUserData &&
      parsedUserData.user._id &&
      Array.isArray(props.participants) &&  // Ajout de cette vérification
      props.participants.includes(parsedUserData.user._id)
    );
  }, [props.participants, props.tontineId]);

  const handleButtonClick = async () => {
    try {
      if (isParticipating) {
        // User is participating, trigger the leave function
        await props.onLeave();
      } else {
        // User is not participating, trigger the participate function
        await props.onParticipate();
      }

      // Mettez à jour isParticipating immédiatement pour refléter le changement localement
      setIsParticipating(!isParticipating);
    } catch (error) {
      console.error('Erreur lors du traitement du bouton :', error);
      // Vous pouvez gérer ici les erreurs, par exemple afficher une notification à l'utilisateur
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="carte rounded-4 mb-3  d-flex">
        <div className="left-side rounded-start-4 "></div>
        <div className="right-side py-2 px-3">
          <div className="top d-flex justify-content-between align-items-center mt-2 mb-1">
            <p className="titreC">{props.titre}</p>
            <button
              onClick={handleButtonClick}
              className={`btn ${isParticipating ? "btn-danger" : "btn-success"}`}
              aria-label={isParticipating ? "Quitter" : "Participer"}
            >
              {isParticipating ? "Quitter" : "Participer"}
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
