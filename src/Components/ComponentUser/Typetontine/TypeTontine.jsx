import React from 'react'
import './tontine.css'
import Layout from '../Layout/Layout'
import Cardtontine from './Cardtontine'
import imgton1 from '../../../Assets/img-ton1.png'
import imgton2 from '../../../Assets/img-ton2.png'
import imgton3 from '../../../Assets/img-ton3.png'

const TypeTontine = () => {
  const typedata =[
    {
      titre:'Tontine téléphone',
      des:'Chaque Samedi ',
      img:imgton1,
      some:'5.000 fcfa'
    },
    {
      titre:'Tontine greffage',
      des:'Chaque Lundi ',
      img:imgton2,
      some:'2.000 fcfa'
    },
    {
      titre:'Tontine ordinateur',
      des:'19-2022 à  22h 30 ',
      img:imgton3,
      some:'5.000 fcfa'
    }
  ];

  return (
    <Layout >
      <div className="mx-4 mt-3 d-flex justify-content-between mb-5">
        <div className="img"><img src={imgton1} className='img-fluid w-100 tof' alt="" /></div>
        <div className="img"><img src={imgton2} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton3} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton1} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton2} className='img-fluid tof' alt="" /></div>
      </div>
    <div className='mx-2'>
      {typedata.map((card)=> (
          <Cardtontine titre={card.titre} des={card.des} img={card.img} some={card.some}/>
      ))}
    </div>
   
    </Layout>
  )
}

export default TypeTontine
