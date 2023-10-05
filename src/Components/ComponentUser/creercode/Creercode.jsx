import React from 'react'
import Button from '../Button/Button'
import './code.css'
import { Link } from 'react-router-dom'

const Creercode = () => {
  return (
        <div className="pt-5 h-100">
        <div className="container py-5">
            <h1>Créer votre code PIN</h1>
            <form className='d-grid px-3'>
                <div className="py-5 gap-3 d-flex justify-content-center align-items-center text-center">
                    <input type="text" className='input-conf' placeholder='-'/>
                    <input type="text" className='input-conf' placeholder='-'/>
                    <input type="text" className='input-conf' placeholder='-'/>
                    <input type="text" className='input-conf' placeholder='-'/>
                </div>
                <div className='text-center '>
                  <Link to='/mesCotisations'>
                    <Button className="btn-conf w-100" libelet="Confirmer"/>
                  </Link>
                </div>
            </form>
        </div>
        </div>
  ) 
}

export default Creercode
