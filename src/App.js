import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Detailcotisation from './Components/ComponentUser/Detailscotisations/Detailcotisation/Detailcotisation';
import Accueil from './Components/ComponentUser/Accueil/Accueil';
import Cotisation from './Components/ComponentUser/Cotisation/Cotisation'
import Identification from './Components/ComponentUser/Inscription/IdentificationTelPin/Identification';
import InfoPersonnelle from './Components/ComponentUser/Inscription/InfoPersonnelle/InfoPersonnelle';
// import Connection from './Components/ComponentUser/Inscription/Connection/Connection';
import Confime from './Components/ComponentUser/ConfimeNumero/Confime';
import Creercode from './Components/ComponentUser/creercode/Creercode';
import Tontine from './Components/ComponentUser/Tontine/Tontine'

function App() {  
  return (
    <div className="">
      <Router>
        <TypeTontine/>
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/idParCall"  element={<Identification />} />
        <Route path="/confirmNumber"  element={<Confime />} />
        <Route path="/infoPersonnelle"  element={<InfoPersonnelle />} />
        <Route path="/creatCode"  element={<Creercode />} />
        <Route path="/mesCotisations"  element={<Cotisation />} />
        <Route path="/tontine"  element={<Tontine />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
