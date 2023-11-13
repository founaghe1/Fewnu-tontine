import React from "react";
import "./tontine.css";

const Cardtontine = (props) => {
  const handleButtonClick = () => {
    if (props.isParticipating) {
      // User is participating, trigger the leave function
      props.onLeave();
    } else {
      // User is not participating, trigger the participate function
      props.onParticipate();
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
              className={`btn ${props.isParticipating ? 'btn-danger' : 'btn-success'}`}
              aria-label={props.isParticipating ? "Quitter" : "Participer"}
            >
              {props.isParticipating ? "Quitter" : "Participer"}
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
