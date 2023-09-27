import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detailcotisation from './Components/ComponentUser/Detailscotisations/Detailcotisation/Detailcotisation';

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" exact element={<Detailcotisation />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
