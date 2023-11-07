import React from 'react'
import './tontine.css'
import Layout from '../Layout/Layout'
import Cardtontine from './Cardtontine'
import imgton1 from '../../../Assets/img-ton1.png'
import imgton2 from '../../../Assets/img-ton2.png'
import imgton3 from '../../../Assets/img-ton3.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'; 


const TypeTontine = () => {

  const [tontines, setTontines] = useState([]); // État pour stocker les tontines

  // Effectuer une requête GET pour obtenir les tontines depuis l'API
  useEffect(() => {
    axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
      .then((response) => {
        // Stockez les tontines dans l'état
        setTontines(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tontines :', error);
      });
  }, []);






  // const typedata =[
  //   {
  //     titre:'Tontine téléphone',
  //     des:'Chaque Samedi ',
  //     img:imgton1,
  //     some:'5.000 fcfa'
  //   },
  //   {
  //     titre:'Tontine greffage',
  //     des:'Chaque Lundi ',
  //     img:imgton2,
  //     some:'2.000 fcfa'
  //   },
  //   {
  //     titre:'Tontine ordinateur',
  //     des:'19-2022 à  22h 30 ',
  //     img:imgton3,
  //     some:'5.000 fcfa'
  //   },
  //   {
  //     titre:'Tontine greffage',
  //     des:'Chaque Lundi ',
  //     img:imgton2,
  //     some:'2.000 fcfa'
  //   },
  //   {
  //     titre:'Tontine téléphone',
  //     des:'Chaque Samedi ',
  //     img:imgton1,
  //     some:'5.000 fcfa'
  //   }
  // ];

  return (
    <Layout >
      <div className="mx-4 mt-3 d-flex justify-content-between mb-5">
        <div className="img"><img src={imgton1} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton2} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton3} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton1} className='img-fluid tof' alt="" /></div>
        <div className="img"><img src={imgton2} className='img-fluid tof' alt="" /></div>
      </div>  
      <div className='mx-2 d-flex justify-content-center'>
        <div className='cart rounded'>
          {tontines.map((tontine, index) => (
            <Cardtontine
              key={index}
              titre={tontine.tontine}
              des={tontine.cotisationDay}
              img={tontine.image}
              some={tontine.somme}
            />
          ))}
        </div>
      </div>
   
    </Layout>
  )
}

export default TypeTontine
