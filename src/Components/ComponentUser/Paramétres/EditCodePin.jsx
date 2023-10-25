import React from 'react'
import './Edit.css'
import HeaderProfil from '../Profil/HeaderProfil'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Layout from '../Layout/Layout';

const EditCodePin = () => {
  return ( 
    <Layout>
    <div id='edit-code' className=''>
        {/* Mettre l'icon retour after priere */}
        <span className="ps-3">
            <Link to='/parametres' >
                <MdKeyboardArrowLeft className="retour" />
            </Link>
        </span>
        <div className='d-flex justify-content-center'>
            <HeaderProfil/>
        </div>
        <h1>Modifier votre code PIN</h1>
        <div className='container d-flex justify-content-center'>
            <form className='px-3 form'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Actuel code PIN</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nouveau code PIN</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className="mb-5">
                    <label for="exampleInputEmail1" className="form-label">Confirmer Nouveau PIN</label>
                    <input type="number" className="form-control"/>
                </div>
                <div className='d-flex justify-content-center mt-5 mb-3'>
                    <Link to='/parametres'>
                        <button type="submit" id="Edit-button" className='px-3'>Mettre à jour</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
    </Layout>
  )
}

export default EditCodePin
