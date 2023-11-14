import React, { useEffect, useState } from "react";
import "./tontine.css";
import axios from 'axios';

const Cardtontine = (props) => {
  const [isParticipating, setIsParticipating] = useState(props.isParticipating);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const parsedUserData = storedUser ? JSON.parse(storedUser) : null;
    setUserData(parsedUserData);
  }, []);  // Utilisez une dépendance vide pour s'assurer que cela ne s'exécute qu'une seule fois lors du montage du composant

  useEffect(() => {
    // Fonction pour vérifier la participation côté client
    const checkParticipation = async () => {
      try {
        const response = await axios.get(`https://fewnu-tontin.onrender.com/checkParticipation/checkParticipation/${userData.userId}/${props.tontineId}`);
        const { isParticipating } = response.data;
        setIsParticipating(isParticipating);
      } catch (error) {
        console.error('Erreur lors de la vérification du statut de participation côté client :', error);
        // Gérez les erreurs ici
      }
    };

    // Vérifiez la participation lorsque le composant est monté ou lorsque le tontineId change
    if (userData && props.tontineId) {
      checkParticipation();
    }
  }, [userData, props.tontineId]);

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
