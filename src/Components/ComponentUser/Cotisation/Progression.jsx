import React from "react";
import { TbMoneybag } from "react-icons/tb";

const Progression = () => { 
  return (
    <div className="card progression p-3 mb-5">
      <div className="icon-containt  d-flex  justify-content-center align-items-center">
        <TbMoneybag className="icon" />
      </div> 
      <div className="info-containt mt-2">
        <p className="text-capitalize">mes cotisations</p>
        <p className="text-uppercase">
          <span>500.000</span> fcfa 
        </p>
      </div>
    </div>
  );
};

export default Progression;
