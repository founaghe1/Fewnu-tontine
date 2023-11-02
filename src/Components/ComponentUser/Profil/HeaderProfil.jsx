import React, { useEffect, useState } from "react";
import image from "../../../Assets/photo-profil.png";

const HeaderProfil = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    

    

  useEffect(() => {
    // Récupérez le nom de l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem("userData");

    // Assurez-vous que les données existent et sont valides
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setFirstName(userData.user.firstName);
      setLastName(userData.user.lastName);
      
    }
  }, []);


  return (
    <div id="header-profil" className="">
      <div className="d-flex justify-content-center">
        <div className="profil-img-containt d-flex justify-content-center">
          <img src={image} alt="photo profil" />
        </div>
      </div>
      <h1 className="text-capitalize text-center">{firstName} {lastName}</h1>
      {/* <p className="profession text-capitalize text-center">designer</p> */}
    </div>
  );
};

export default HeaderProfil;
