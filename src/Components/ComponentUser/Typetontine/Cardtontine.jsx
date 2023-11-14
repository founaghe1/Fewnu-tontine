import React, { useEffect, useState } from "react";
import "./tontine.css";
import axios from 'axios';

const Cardtontine = (props) => {
  const [isParticipating, setIsParticipating] = useState(props.isParticipating);

  useEffect(() => {
    // Fonction asynchrone pour vérifier si l'utilisateur participe toujours
    const checkParticipationStatus = async () => {
      // Vérifiez que userId et tontineId ne sont pas undefined
      if (props.userId && props.tontineId) {
        try {
          const response = await axios.get(
            `https://fewnu-tontin.onrender.com/checkParticipationStatus/checkParticipationStatus/${props.userId}/${props.tontineId}`
          );

          if (response.ok) {
            // Mettez à jour isParticipating en fonction de la réponse
            const data = await response.json();
            setIsParticipating(data.isParticipating);
          } else {
            // Gérer les erreurs
            console.error("Erreur lors de la vérification du statut de participation");
          }
        } catch (error) {
          console.error("Erreur lors de la vérification du statut de participation", error);
        }
      }
    };

    // Appelez la fonction pour vérifier le statut de participation
    checkParticipationStatus();
  }, [props.userId, props.tontineId, props.isParticipating]);

  const handleButtonClick = () => {
    if (isParticipating) {
      // User is participating, trigger the leave function
      props.onLeave();
      // Mettez à jour isParticipating immédiatement pour refléter le changement localement
      setIsParticipating(false);
    } else {
      // User is not participating, trigger the participate function
      props.onParticipate();
      // Mettez à jour isParticipating immédiatement pour refléter le changement localement
      setIsParticipating(true);
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

