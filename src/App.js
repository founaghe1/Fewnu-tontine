import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Accueil from './Components/ComponentUser/Accueil/Accueil';
import Cotisation from './Components/ComponentUser/Cotisation/Cotisation';

function App() {
  return (
    <div className="App">
      {/* <Accueil/> */}
      <Cotisation/>
    </div>
  );
}

export default App;
