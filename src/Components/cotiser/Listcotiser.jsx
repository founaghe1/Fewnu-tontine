import React, { useEffect, useState } from 'react';

function Listcotiser() {
  const [cotisations, setCotisations] = useState({});

  useEffect(() => {
    const storedCotisations = JSON.parse(localStorage.getItem('cotisations')) || {};
    setCotisations(storedCotisations);
  }, []);

  return (
    <div>
      <h1>Cotisations</h1>
      <ul>
        {Object.keys(cotisations).map((tontine) => (
          <li key={tontine}>
            <h2>{tontine}</h2>
            <ul>
              {cotisations[tontine].map((cotisation, index) => (
                <li key={index}>{cotisation}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listcotiser;
