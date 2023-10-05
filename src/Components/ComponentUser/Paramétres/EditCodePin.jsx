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
        <div className='container'>
            <form className='px-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Actuel code PIN</label>
                    <input type="number" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Nouveau code PIN</label>
                    <input type="number" class="form-control"/>
                </div>
                <div class="mb-5">
                    <label for="exampleInputEmail1" class="form-label">Confirmer Nouveau PIN</label>
                    <input type="number" class="form-control"/>
                </div>
                <div className='d-flex justify-content-center mt-5 mb-3'>
                    <Link to='/parametres'>
                        <button type="submit" id="Edit-button" className='px-2'>Mettre à jour</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
    </Layout>
  )
}

export default EditCodePin
