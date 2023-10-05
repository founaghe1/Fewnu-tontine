import React from 'react'
import './Edit.css'
import HeaderProfil from '../Profil/HeaderProfil'

const EditProfil = () => {
  return (
    <div id='edit-profil' className='my-5'>
        <div className='d-flex justify-content-center'>
            <HeaderProfil/>
        </div>
            <h1>Informations Générales</h1>
        <div className='container'>
            <form className='px-3'>
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
                <div className='d-flex justify-content-center'>
                    <button type="submit" id="Edit-button" className='px-2'>Mettre à jour</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProfil
