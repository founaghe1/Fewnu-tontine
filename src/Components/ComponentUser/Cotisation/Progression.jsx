import React from "react";
import { TbMoneybag } from "react-icons/tb";

const Progression = () => {
  return (
    <div className="card progression p-3 mb-4">
      <div className="icon-containt  d-flex  justify-content-center align-items-center">
        <TbMoneybag className="icon" />
      </div>
      <div className="info-containt">
        <p className="text-capitalize">cotiations</p>
        <p className="text-uppercase">
          <span>100.000</span> fcfa / <span>300.000</span> fcfa
        </p>
        <div
          class="progress"
          role="progressbar"
          aria-label="Example 1px high"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          
        >
          <div class="progress-bar" ></div>
        </div>
      </div>
    </div>
  );
};

export default Progression;
