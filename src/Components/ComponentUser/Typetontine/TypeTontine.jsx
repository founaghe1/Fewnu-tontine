import React, { useState, useEffect } from "react";
import "./tontine.css";
import Layout from "../Layout/Layout";
import imgton1 from "../../../Assets/img-ton1.png";
import imgton2 from "../../../Assets/img-ton2.png";
import imgton3 from "../../../Assets/img-ton3.png";
import Button from "../Button/Button";

const TypeTontine = () => {
  const [tontineSelectionnee, setTontineSelectionnee] = useState("telephone");
  const [tontineData, setTontineData] = useState(null);

  const gererClicTontine = (typeTontine) => {
    setTontineSelectionnee(typeTontine);
  };

  useEffect(() => {
    // Effectuer une requête GET pour récupérer les informations de la tontine
    fetch(`/tontines/${tontineSelectionnee}`)
      .then((response) => response.json())
      .then((data) => {
        setTontineData(data.tontine);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de la tontine :', error);
      });
  }, [tontineSelectionnee]);

  return (
    <Layout>
      <div className="mx-4 mt-3 d-flex justify-content-between mb-5">
        <div>
          <button
            type="button"
            className={`btn btn-light ${tontineSelectionnee === "telephone" ? "active" : ""}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => gererClicTontine("telephone")}
          >
            <div className="img">
              <img src={imgton1} className="img-fluid w-100 tof" alt="" />
            </div>
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`btn btn-light ${tontineSelectionnee === "greffage" ? "active" : ""}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => gererClicTontine("greffage")}
          >
            <div className="img">
              <img src={imgton2} className="img-fluid w-100 tof" alt="" />
            </div>
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`btn btn-light ${tontineSelectionnee === "ordinateur" ? "active" : ""}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => gererClicTontine("ordinateur")}
          >
            <div className="img">
              <img src={imgton3} className="img-fluid w-100 tof" alt="" />
            </div>
          </button>
        </div>
      </div>

      {tontineData && (
        <div>
          <p>Nom de la tontine: {tontineData.tontine}</p>
          <p>Somme: {tontineData.somme}</p>
          <p>Jour de cotisation: {tontineData.cotisationDay}</p>
          <Button libelet="Participer" className="btnIdenti" type="submit" />
        </div>
      )}

    <div
      className="modal fade"
      id="exampleModal" // Assurez-vous que l'ID correspond à celui du bouton
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body d-flex justify-content-center align-items-center">
            <div className="my-auto">
              <p className="text-secondary fs-6 fw-bold mt-3">
                Participer à la tontine {tontineSelectionnee}
              </p>
              <Button libelet="Participer" className="btnIdenti" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>

    </Layout>
  );
};

export default TypeTontine;
