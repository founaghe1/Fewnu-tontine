import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Accueil from './Components/ComponentUser/Accueil/Accueil';
import Cotisation from './Components/ComponentUser/Cotisation/Cotisation';
import Profil from './Components/ComponentUser/Profil/Profil';

function App() {
  return (
    <div className="App">
      {/* <Accueil/> */}
      {/* <Cotisation/> */}
      <Profil/>
    </div>
  );
}

export default App;
