import React, { useState, useEffect } from "react";
import { TbMoneybag } from "react-icons/tb";
import axios from "axios";

const Progression = () => {
  const [cotisations, setCotisations] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    axios
      .get("https://fewnu-tontin.onrender.com/cotisations/getCotisations")
      .then((response) => {
        setCotisations(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des cotisations", error);
      });
  }, []);

  // Filter cotisations for the specific user
  const userCotisations = cotisations.filter(
    (cotisation) => cotisation.user === storedUser?.user._id
  );

  // Calculate the total cotisations for the specific user
  const totalCotisations = userCotisations.reduce(
    (total, cotisation) => total + cotisation.cotisation,
    0
  );

  return (
    <div className="card progression p-3 mb-5">
      <div className="icon-containt d-flex justify-content-center align-items-center">
        <TbMoneybag className="icon" />
      </div>
      <div className="info-containt mt-2">
        <p className="text-capitalize">mes cotisations</p>
        <p className="text-uppercase">
          <span>{totalCotisations} fcfa </span>
        </p>
      </div>
    </div>
  );
};

export default Progression;
