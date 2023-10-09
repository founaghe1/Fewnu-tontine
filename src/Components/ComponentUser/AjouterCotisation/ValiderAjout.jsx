import React from 'react'
import Layout from '../Layout/Layout'
import img from '../../../Assets/profill.png'
import wave from '../../../Assets/wave.png'
import orange from '../../../Assets/orange-money.png'
import './Ajouter.css'
import {GiTwoCoins} from 'react-icons/gi'
import Button from '../Button/Button'
// import '../../../Components/config.css'

const ValiderAjout = () => {
  return (
      <Layout>
        <div className="h-100">
            <div className="part1 pt-5">
                <div className="part-img">
                    <img src={img} className='img-fluid mb-2' alt="" />
                </div>
                <div c
                 lassName="div-text">
                    <p className='titre'>Faly Seck</p>
                    <p className='des paragraph mb-3'>Designer</p>
                    <p className='phrag paragraph mb-5'>Ajouter une cotisation</p>
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
                                <input type="checkbox" className='form-check-input me-2' />
                                <img src={wave} className='' alt="" />
                        </div>
                        <div className="form-check">
                                <input type="checkbox" className='form-check-input me-2' />
                                <img src={orange} alt="" />
                        </div>
                        <div className="form-check">
                                <input type="checkbox" className='form-check-input me-2' />
                                <GiTwoCoins size={35}/>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Button className="btn btn-form shadow" libelet="Enregistrer"/>
                    </div>
                </form>

            </div>
        </div>
    </Layout>
  )
}

export default ValiderAjout
