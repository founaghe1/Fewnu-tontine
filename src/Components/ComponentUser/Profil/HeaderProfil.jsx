import React from "react";
import image from "../../../Assets/photo-profil.png";

const HeaderProfil = () => {
  return (
    <div id="header-profil" className="">
      <div className="d-flex justify-content-center">
        <div className="profil-img-containt d-flex justify-content-center">
          <img src={image} alt="photo profil" />
        </div>
      </div>
      <h1 className="text-capitalize text-center">faly seck</h1>
      <p className="profession text-capitalize text-center">designer</p>
    </div>
  );
};

export default HeaderProfil;
