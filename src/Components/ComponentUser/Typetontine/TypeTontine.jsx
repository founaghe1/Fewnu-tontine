import React, { useState } from "react";
import "./tontine.css";
import Layout from "../Layout/Layout";
import imgton1 from "../../../Assets/img-ton1.png";
import imgton2 from "../../../Assets/img-ton2.png";
import imgton3 from "../../../Assets/img-ton3.png";
import Button from "../Button/Button";

const TypeTontine = () => {
  const [tontineSelectionnee, setTontineSelectionnee] = useState("telephone");
  const [aParticipe, setAParticipe] = useState(false);

  const gererClicParticiper = () => {
    console.log("Participer clicked");
    setAParticipe(true);
  };

  const gererClicQuitter = () => {
    setAParticipe(false);
  };
  
  const boutonsTontine = [
    {
      image: imgton1,
      gererClicTontine: () => gererClicTontine("telephone"),
      tontineSelectionnee: "telephone",
      aParticipe,
      gererClicParticiper: () => gererClicParticiper(),
      gererClicQuitter: () => gererClicQuitter(),
    },
    {
      image: imgton2,
      gererClicTontine: () => gererClicTontine("greffage"),
      tontineSelectionnee: "greffage",
      aParticipe,
      gererClicParticiper: () => gererClicParticiper(),
      gererClicQuitter: () => gererClicQuitter(),
    },
    {
      image: imgton3,
      gererClicTontine: () => gererClicTontine("ordinateur"),
      tontineSelectionnee: "ordinateur",
      aParticipe,
      gererClicParticiper: () => gererClicParticiper(),
      gererClicQuitter: () => gererClicQuitter(),
    },
  ];

  const gererClicTontine = (typeTontine) => {
    setTontineSelectionnee(typeTontine);
    setAParticipe(false);
  };


  return (
    <Layout>
      <div className="mx-4 mt-3 d-flex justify-content-between mb-5">
        {boutonsTontine.map((bouton, index) => (
          <div key={index}>
            <button
              type="button"
              className={`btn btn-light ${tontineSelectionnee === bouton.tontineSelectionnee ? "" : ""}`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={bouton.gererClicTontine}
            >
              <div className="img">
                <img src={bouton.image} className="img-fluid w-100 tof" alt="" />
              </div>
            </button>
          </div>
        ))}
      </div>

      <div
        className="modal fade mx-auto"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body d-flex justify-content-center align-items-center">
              <div className="my-auto">
                <p className="text-secondary fs-6 fw-bold mt-3">
                  {aParticipe ? `Quitter la tontine ${tontineSelectionnee}` : `Participer à la tontine ${tontineSelectionnee}`}
                </p>
                {aParticipe ? (
                  // <Button libelet="Quitter" className="btnIdenti" type="button" onClick={gererClicQuitter} />
                  <button type="button" class="btn btn-success btnIdenti" onClick={gererClicQuitter}>Quitter</button>
                ) : (
                  // <Button libelet="Participer" className="btnIdenti" type="button" onClick={gererClicParticiper} />
                  <button type="button" class="btn btn-success btnIdenti" onClick={gererClicParticiper}>Participer</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TypeTontine;
