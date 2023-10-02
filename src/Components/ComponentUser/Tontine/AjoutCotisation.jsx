import React from 'react'
import { FaSackDollar } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";

const AjoutCotisation = () => {
  return (
    <div className="card progression p-3 mb-5">
      <div className="icon-containt  d-flex  justify-content-center align-items-center">
        <FaSackDollar className="icon" />
      </div>
      <div className="info-containt mt-2">
        <p className="text-capitalize fw-bold fs-4">cotiations</p>
        <p className="text-capitalize tontine">
          <span>tontine téléphone</span>
        </p>
      </div>
      <div className='add-cotisation d-flex ms-5 align-items-center'>
        <a href="" className='text-decoration-none'>
            <GrAddCircle className='add-icon fs-1 bg-light'/>
        </a>
      </div>
    </div>
  )
}

export default AjoutCotisation
