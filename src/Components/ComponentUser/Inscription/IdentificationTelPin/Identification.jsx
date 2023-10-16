import React from 'react'
import './Identification.css'
import { GiWallet } from 'react-icons/gi'
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import FooterImg from '../../FooterImg/FooterImg';
import { Link } from 'react-router-dom';

const Indentification = () => {
  return (
    <div className='identif shadow'>
        <h4 className='text-center title'><span className='wallet'><GiWallet /></span> fewnu Tontine </h4>
        <p className='paragIdentif text-center'>Identifiez-vous</p>
        <p className='paragText text-center'>Identifiez-vous et gérez vos cotisations</p>
        <div className='text-center'>
            <Input placeholder="N° téléphone" className='input px-3' />
        </div>
        <div className='text-center'>
          <Link to='/confirmNumber'>
            <Button libelet='S’identifier' className='btnIdenti' />
          </Link>
        </div>

        
        <FooterImg />
        
    </div>
  )
}

export default Indentification