import React from 'react'
import Layout from '../Layout/Layout'
import img from '../../../Assets/profill.png'
import wave from '../../../Assets/wave.png'
import orange from '../../../Assets/orange-money.png'
import './Ajouter.css'
import {GiTwoCoins} from 'react-icons/gi'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const ValiderAjout = () => {
  return (
      <Layout>
        <div className="h-100">
            <div className="part1">
                <div className="part-img">
                    <img src={img} className='img-fluid mb-2' alt="" />
                </div>
                <div c
                 lassName="div-text">
                    <p className='titre'>Faly Seck</p>
                    <p className='des mb-3 text-center'>Designer</p>
                    <p className='phrag mb-5'>Ajouter une cotisation</p>
                </div>
            </div>

            <div className="part2">
                <p className='para1'>Tontine</p>
                <p className='para2'>Tontine téléphone</p>
                <p className='para3'>Montant</p>
                <p className='para4'>2.000 fcfa</p>
            </div>
            <div className="part3">
                <p className='para5'>Mode de payement :</p>
                <form>
                    <div className="d-flex gap-5">
                        <div className="form-check">
                                <input type="checkbox" className='form-check-input me-2 checkbox' />
                                <img src={wave} width={30} className='' alt="" />
                        </div>
                        <div className="form-check">
                                <input type="checkbox" className='form-check-input me-2 checkbox' />
                                <img src={orange} width={35} alt="" />
                        </div>
                        <div className="form-check">
                                <input type="checkbox" className='form-check-input me-2 checkbox' />
                                <GiTwoCoins size={35}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="text-center mt-3">
                <Link to='/tontine'>
                    <Button className="btn-form shadow" libelet="Enregistrer"/>
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default ValiderAjout
