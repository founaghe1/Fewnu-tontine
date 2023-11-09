import React, { useState, useEffect } from "react";
import "./tontine.css";

const Cardtontine = (props) => {
  // Get the initial participation status from localStorage or default to true
  const [isParticipating, setIsParticipating] = useState(
    localStorage.getItem(`${props.titre}-participation`) === "true" || true
  );

  const handleButtonClick = () => {
    // Toggle the participation status
    const newStatus = !isParticipating;
    setIsParticipating(newStatus);

    // Save the participation status to localStorage
    localStorage.setItem(`${props.titre}-participation`, newStatus.toString());

    // Check if the onParticipate or onLeave function is passed as a prop and call it
    if (newStatus && props.onParticipate) {
      props.onParticipate();
    } else if (!newStatus && props.onLeave) {
      props.onLeave();
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="carte rounded-4 mb-3  d-flex">
        <div className="left-side rounded-start-4 "></div>
        <div className="right-side py-2 px-3">
          <div className="top d-flex justify-content-between align-items-center mt-2 mb-1">
            <p className="titreC">{props.titre}</p>
            {isParticipating ? (
              <button
                onClick={handleButtonClick}
                className="btn btn-success"
                aria-label="Participer"
              >
                Participer
              </button>
            ) : (
              <button
                onClick={handleButtonClick}
                className="btn btn-secondary"
                aria-label="Quitter"
              >
                Quitter
              </button>
            )}
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
