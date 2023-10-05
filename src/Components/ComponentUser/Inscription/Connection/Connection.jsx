import React from 'react';
import './connection.css';
import { GiWallet } from 'react-icons/gi'
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import FooterImg from '../../FooterImg/FooterImg';
import { Link } from 'react-router-dom';

const Connection = () => {
  return (
    <div>
        <h4 className='text-center title'><span className='wallet'><GiWallet /></span> fewnu Tontine </h4>
        <p className='paragConect text-center'>Identifiez-vous</p>
        <p className='textConect'>Identifiez-vous et gérez vos cotisations</p>
        <div className='text-center'>
            <Input placeholder='N° téléphone' className='input px-3' />
            <Input placeholder='Code PIN' className='input px-3' />
            <Link to='/mesCotisations'>
              <Button libelet='S’identifier' className='btnConfirm' />
            </Link>
        </div> 

        <FooterImg />
    </div>
  )
}

export default Connection