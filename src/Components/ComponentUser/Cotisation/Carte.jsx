import React from 'react'

const Carte = (props) => {
  return (
    <div className='carte rounded-4 mb-3  d-flex'>
      <div className='left-side rounded-start-4 '>
      </div>
      <div className='right-side py-2 px-3'>
        <div className="top d-flex justify-content-between">
            <p className="mois text-capitalize">{props.mois}</p>
            <p className="montant text-uppercase"><span>{props.montant}</span>f</p>
        </div>
        <div className="bottom d-flex justify-content-between">
            <p className="date"><span>{props.date}</span> à <span>{props.heure}</span></p>
            <p className="statut text-capitalize">{props.statut}</p>
        </div>
      </div>
    </div>
  )
}

export default Carte
