import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detailcotisation from './Components/ComponentUser/Detailscotisations/Detailcotisation/Detailcotisation';
import Accueil from './Components/ComponentUser/Accueil/Accueil';
import Cotisation from './Components/ComponentUser/Cotisation/Cotisation'

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/cotisation"  element={<Cotisation />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
