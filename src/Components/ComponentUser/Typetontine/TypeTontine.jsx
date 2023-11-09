import React, { useState, useEffect } from "react";
import "./tontine.css";
import Layout from "../Layout/Layout";
import Cardtontine from "./Cardtontine";
import axios from 'axios';
import imgton1 from '../../../Assets/img-ton1.png'
import imgton2 from '../../../Assets/img-ton2.png'
import imgton3 from '../../../Assets/img-ton3.png'

const TypeTontine = () => {
  const [tontines, setTontines] = useState([]);

  useEffect(() => {
    axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
      .then((response) => {
        setTontines(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tontines:', error);
      });
  }, []);

  const handleParticipate = (tontineId) => {
    axios.post(`https://fewnu-tontin.onrender.com/addTontine/participate/${tontineId}`)
      .then(response => {
        console.log(response.data);
        // Update the local state by fetching the updated tontines
        axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
          .then((response) => {
            setTontines(response.data);
          })
          .catch((error) => {
            console.error('Error fetching tontines:', error);
          });
      })
      .catch(error => {
        console.error('Error participating in tontine:', error);
      });
  };

  const handleLeave = (tontineId) => {
    axios.post(`https://fewnu-tontin.onrender.com/addTontine/leave/${tontineId}`)
      .then(response => {
        console.log(response.data);
        // Update the local state by fetching the updated tontines
        axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
          .then((response) => {
            setTontines(response.data);
          })
          .catch((error) => {
            console.error('Error fetching tontines:', error);
          });
      })
      .catch(error => {
        console.error('Error leaving tontine:', error);
      });
  };


  return (
    <Layout>
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
              some={tontine.somme}
              onParticipate={() => handleParticipate(tontine._id)} 
              onLeave={() => handleLeave(tontine._id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TypeTontine;
