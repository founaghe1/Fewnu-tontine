import React from 'react'
import Button from '../Button/Button'
import './confirme.css'
import { Link } from 'react-router-dom'

const Confime = () => {
  return (
    
    <div className='h-100 pt-5'>
      <div className="container text-center">
        <h1 className='mt-5 mb-4'>Confirmer votre numero</h1>
        <p>Nous avons envoyé un code de confirmation à  chiffres à +221*******00.</p>
        <p>Assurez-vous d’entrer le bon code.</p>
        <form className='d-grid px-3'>
            <div className="py-5 gap-3 d-flex justify-content-center align-items-center text-center">
                <input type="text" className='input-conf' placeholder='-'/>
                <input type="text" className='input-conf' placeholder='-'/>
                <input type="text" className='input-conf' placeholder='-'/>
                <input type="text" className='input-conf' placeholder='-'/>
            </div>
            <div>
              <Link to='/infoPersonnelle' >
                <Button className="btn-conf w-100" libelet="Confirmer"/>
              </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Confime
