import React, { useState } from 'react'
import Layout from '../ComponentUser/Layout/Layout'
import HeaderProfil from '../ComponentUser/Profil/HeaderProfil'
import { Link, useNavigate } from 'react-router-dom';

const Cotiser = () => {
   const [selectedTontine, setSelectedTontine] = useState('');
   const [cotisation, setCotisation] = useState('');
   const [cotisations, setCotisations] = useState('');
   const [cotisationType, setCotisationType] = useState('mois');
   const navigate = useNavigate()

   
  const handleAddCotisation = (e) => {
    e.preventDefault();

        if (cotisation.trim() !== '' && selectedTontine) {
          const newCotisations = { ...cotisations };
          if (newCotisations[selectedTontine]) {
            newCotisations[selectedTontine].push(cotisation);
          } else {
            newCotisations[selectedTontine] = [cotisation];
          }
    
          localStorage.setItem('cotisations', JSON.stringify(newCotisations));
          setCotisations(newCotisations);
          setCotisation('');
          navigate('/cotise');

        }
        // alert('Bravo, ta cotiser');
      };

  return (
    <div>
      <Layout>
      <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
      <HeaderProfil />
      <h3 className="text-center">Ajouter une cotisation</h3>
      <form className="d-flex justify-content-center forme "> 
        <div className="Inputs">
        <div className=" my-5"> 
        <select class="form-select mb-4" aria-label="Default select example" value={selectedTontine} 
            onChange={(e)=> setSelectedTontine(e.target.value)}>
          <option className="select-option"selected>Groupes</option>
          <option className="select-option">Tontine téléphone</option>
          <option className="select-option">Tontine greffage</option>
          <option className="select-option">Tontine ordinateur</option>
        </select>
        <div class="input-group flex-nowrap">
          <input type="number" class="form-control" placeholder="Montant" aria-label="Username"
            aria-describedby="addon-wrapping" value={cotisation} onChange={(e)=> setCotisation(e.target.value)}/>
        </div>
      </div>
      <div className="mb-5">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
          value="mois"
          checked={cotisationType === 'mois'}
          onChange={() => setCotisationType('mois')}/>
          <label class="form-check-label" for="flexRadioDefault1"> Cotisation mensuelle</label>
        </div>
        
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
          value="annee"
          checked={cotisationType === 'annee'}
          onChange={() => setCotisationType('annee')} />
          <label class="form-check-label" for="flexRadioDefault2">Cotisation globale</label>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to='/listcotiser'>
          <button className="text-capitalize pay-button" onClick={handleAddCotisation}>passer au payement</button>
        </Link>
        
      </div>
        </div>
      </form>
      </div>
      </Layout>
    </div>
  )
}
export default Cotiser
