import React from 'react';
import './infoPersonnelle.css';
import { GiWallet } from 'react-icons/gi'
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import FooterImg from '../../FooterImg/FooterImg';

const InfoPersonnelle = () => {
  return (
    <div>
        <h4 className='text-center title'><span className='wallet'><GiWallet /></span> fewnu Tontine </h4>
        <p className='paragInfo text-center'>Informations personnelles</p>
        <p className='textInfo'>Renseigner vos informations</p>
        <div className='text-center'>
            <Input placeholder='Nom' className='input px-3' />
            <Input placeholder='Prénom' className='input px-3' />
            <Input placeholder='Résidence' className='input px-3' />
        </div>
        <div className='text-center'>
            <Button libelet='Confirmer' className='btnConfirm' />
        </div>

        <FooterImg />
    </div>
  )
}

export default InfoPersonnelle