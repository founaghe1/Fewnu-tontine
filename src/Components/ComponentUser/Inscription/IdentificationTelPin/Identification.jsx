import React from 'react'
import './Identification.css'
import { GiWallet } from 'react-icons/gi'
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import FooterImg from '../../FooterImg/FooterImg';

const Indentification = () => {
  return (
    <div>
        <h4 className='text-center title'><span className='wallet'><GiWallet /></span> fewnu Tontine </h4>
        <p className='paragIdentif text-center'>Identifiez-vous</p>
        <p className='paragText text-center'>Identifiez-vous et gérez vos cotisations</p>
        <div className='text-center'>
            <Input placeholder="N° téléphone" className='input px-3' />
        </div>
        <div className='text-center'>
            <Button libelet='S’identifier' className='btnIdenti' />
        </div>

        
        <FooterImg />
        
    </div>
  )
}

export default Indentification