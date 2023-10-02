import React from 'react'
import Layout from '../Layout/Layout'
import Button from '../Button/Button'
import './code.css'

const Creercode = () => {
  return (
    <Layout>
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
                <Button className="btn-conf" libelet="Confirmer"/>
            </form>
        </div>
        </div>
    </Layout>
  )
}

export default Creercode
