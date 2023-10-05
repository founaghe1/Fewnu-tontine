import React from "react";
import "./Ajouter.css";
import HeaderProfil from "../Profil/HeaderProfil";
import Layout from "../Layout/Layout";

const Ajouter = () => {
  return (
    <Layout>
    <div className="container-fluid py-5 px-4">
      <HeaderProfil />
      <h3 className="text-center">Ajouter une cotisation</h3>
      <div className="Inputs my-5">
        <select class="form-select mb-4" aria-label="Default select example">
          <option selected>Groupes</option>
          <option value="1">Tontine téléphone</option>
          <option value="2">Tontine greffage</option>
          <option value="3">Tontine ordinateur</option>
        </select>
        <div class="input-group flex-nowrap">
          <input
            type="number"
            class="form-control"
            placeholder="Montant"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div className="mb-5">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Cotisation mensuelle
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Cotisation globale
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="text-capitalize pay-button">passer au payement</button>
      </div>
    </div>
    </Layout>
  );
};


export default Ajouter;
