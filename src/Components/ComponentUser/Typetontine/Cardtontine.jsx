import React, { useState } from "react";
import "./tontine.css";

const Cardtontine = (props) => {
    const [isParticipating, setIsParticipating] = useState(() => {
      const storedStatus = localStorage.getItem(`${props.titre}-participation`);
      console.log(`${props.titre}-participation from localStorage:`, storedStatus);
      return storedStatus === "true" || false;
    });
  
    const handleButtonClick = () => {
      if (isParticipating && props.onLeave) {
        props.onLeave();
        setIsParticipating(false);
        localStorage.setItem(`${props.titre}-participation`, "false");
      } else if (!isParticipating && props.onParticipate) {
        props.onParticipate();
        setIsParticipating(true);
        localStorage.setItem(`${props.titre}-participation`, "true");
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
                className={`btn ${isParticipating ? 'btn-secondary' : 'btn-success'}`}
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
  
