import React from 'react';
import { FaSackDollar } from 'react-icons/fa6';
import { GrAddCircle } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';

const AjoutCotisation = ({  totalSum }) => {

  const { tontineId } = useParams();

  


  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-around progress mb-5">
        <div className="card progress p-3 mb-5">
          <div className="icon-containt d-flex justify-content-center align-items-center">
            <FaSackDollar className="icon" />
          </div>
          <div className="info-containt">
            <p className="text-capitalize fw-bold fs-4 text-start">cotisations</p>
            <p className="text-capitalize text-start">
              <span>{tontineId}</span>
              <br />
              <br />
              <span >{totalSum}Fr Cfa</span>
              <br />
            </p>
          </div>
        </div>
        <div className="add-cotisation d-flex align-items-center pe-3">
          <Link to="/ajouterCotisation" className="text-decoration-none">
            <GrAddCircle className="add-icon fs-1 bg-light" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AjoutCotisation;
