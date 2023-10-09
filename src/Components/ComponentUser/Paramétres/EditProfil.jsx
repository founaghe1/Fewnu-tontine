import React from 'react'
import './Edit.css'
import HeaderProfil from '../Profil/HeaderProfil';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const EditProfil = () => {
  return (
    <Layout>
    <div id='edit-profil' className='p-0'>
        <span className="ps-3">
            <Link to='/parametres' >
                <MdKeyboardArrowLeft className="retour" />
            </Link>
        </span>
        <div className='d-flex justify-content-center'>
            
            <HeaderProfil/>
        </div>
            <h1>Informations Générales</h1>
        <div className='container'>
            <form className='px-2'>
                <div class="mb-3"> 
                    <label for="exampleInputEmail1" class="form-label">Nom</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Prénom</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Téléphone</label>
                    <input type="number" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control"/>
                </div>
                <div class="mb-5">
                    <label for="exampleInputPassword1" class="form-label">Proffession</label>
                    <input type="text" class="form-control"/>
                </div>
                <div className='d-flex justify-content-center pb-2'> 
                    <Link to='/profil'>
                        <button type="submit" id="Edit-button" className='px-3 '>Mettre à jour</button>
                    </Link>    
                </div>
            </form>
        </div>
    </div>
    </Layout>
  )
}

export default EditProfil
