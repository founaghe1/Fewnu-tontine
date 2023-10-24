import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detailcotisation from './Components/ComponentUser/Detailscotisations/Detailcotisation/Detailcotisation';
import Accueil from './Components/ComponentUser/Accueil/Accueil';
import Cotisation from './Components/ComponentUser/Cotisation/Cotisation'
import Identification from './Components/ComponentUser/Inscription/IdentificationTelPin/Identification';
import InfoPersonnelle from './Components/ComponentUser/Inscription/InfoPersonnelle/InfoPersonnelle';
import Connection from './Components/ComponentUser/Inscription/Connection/Connection';
import Confime from './Components/ComponentUser/ConfimeNumero/Confime';
import Creercode from './Components/ComponentUser/creercode/Creercode';
import Tontine from './Components/ComponentUser/Tontine/Tontine'
import Parametre from './Components/ComponentUser/Paramétres/Parametre';
import EditProfil from './Components/ComponentUser/Paramétres/EditProfil';
import EditCodePin from './Components/ComponentUser/Paramétres/EditCodePin';
import Ajouter from './Components/ComponentUser/AjouterCotisation/Ajouter';
import TypeTontine from './Components/ComponentUser/Typetontine/TypeTontine';
import Profil from './Components/ComponentUser/Profil/Profil';
import ValiderAjout from './Components/ComponentUser/AjouterCotisation/ValiderAjout';
import Listcotiser from './Components/cotiser/Listcotiser';


import LoginPage from './Components/LoginSimulation/LoginPage';
import Cotiser from './Components/cotiser/Cotiser';

function App() {  
  return (
    <div className="App">
      <Router>
        {/* <Routes> */}
          {/* <Route path="/" exact element={<Accueil />} /> */}
          {/* <Route path="/idParCall"  element={<Identification />} /> */}
          {/* <Route path="/confirmNumber"  element={<Confime />} /> */}
          {/* <Route path="/infoPersonnelle"  element={<InfoPersonnelle />} /> */}
          {/* <Route path="/creatCode"  element={<Creercode />} /> */}
          {/* <Route path="/mesCotisations"  element={<Cotisation />} /> */}
          {/* <Route path="/tontine"  element={<Tontine />} /> */}
          {/* <Route path="/ajouterCotisation"  element={<Ajouter />} /> */}
          {/* <Route path="/parametres"  element={<Parametre />} /> */}
          {/* <Route path="/typeTontine"  element={<TypeTontine />} /> */}
          {/* <Route path="/detailCotisation"  element={<Detailcotisation />} /> */}
          {/* <Route path="/profil"  element={<Profil />} /> */}
          {/* <Route path='/modifInfoGeneral' element={<EditProfil />} /> */}
          {/* <Route path='/modifCodePin' element={<EditCodePin />} /> */}
          {/* <Route path='/connection' element={<Connection />} /> */}
          {/* <Route path='/validerAjout' element={<ValiderAjout />} /> */}

          {/* <Route path='/login' element={<LoginPage />} /> */}

        {/* </Routes> */}
      </Router> 
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage/>} />
          <Route path="/cotiser"  element={<Cotiser />} />
          <Route path="/cotise" element={<Cotisation/>}/>
          <Route path="/listcotiser" element={<Listcotiser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
