import React from 'react'
import './tontine.css'

const Cardtontine = (props) => {
  return (
       <div className='carte rounded-4 mb-3  d-flex'>
            <div className='left-side rounded-start-4 '>
            </div>
            <div className='right-side py-2 px-3'>
                <div className="top d-flex justify-content-between align-items-center">
                    <p className="titreC">{props.titre}</p>
                    <img src={props.img} className='img-fluid' width={40} alt="" />
                </div>
                <div className="bottom d-flex justify-content-between">
                    <p className="des"><span>{props.des}</span></p>
                    <p className="statut text-capitalize">{props.some}</p>
                </div>
            </div>
        </div>
  )
}

export default Cardtontine
