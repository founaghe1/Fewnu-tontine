import React from 'react'
import { FaSackDollar } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import { Link } from 'react-router-dom';

const AjoutCotisation = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex justify-content-around progress mb-5'>
      <div className="card progress p-3 mb-5">
        <div className="icon-containt  d-flex  justify-content-center align-items-center">
          <FaSackDollar className="icon" /> 
        </div>
        <div className="info-containt mt-2">
          <p className="text-capitalize fw-bold fs-4">cotisations</p>
          <p className="text-capitalize text-start">
            <span>tontine téléphone</span>
          </p>
        </div>
        </div>
        <div className='add-cotisation d-flex  align-items-center pe-3'>
          <Link to='/ajouterCotisation' className='text-decoration-none'>
              <GrAddCircle className='add-icon fs-1 bg-light'/>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default AjoutCotisation
