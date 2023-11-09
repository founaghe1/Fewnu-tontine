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
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
      .then((response) => {
        setTontines(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tontines :', error);
      });
  }, []);

  const handleParticipate = (tontineId) => {
    // Récupérez l'userId de l'utilisateur connecté depuis le localStorage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      console.log("userId : ",userData.user._id);

      axios.post(`https://fewnu-tontin.onrender.com/addTontine/participateTontine/${tontineId}/${userId}`)
        .then(response => {
          console.log(response.data);
          // Mettez à jour l'état local en récupérant les tontines mises à jour
          axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
            .then((response) => {
              setTontines(response.data);
            })
            .catch((error) => {
              console.error('Erreur lors de la récupération des tontines :', error);
            });
        })
        .catch(error => {
          console.error('Erreur lors de la participation à la tontine :', error);
        });
    }
  };

  const handleLeave = (tontineId) => {
    // Récupérez l'userId de l'utilisateur connecté depuis le localStorage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      axios.post(`https://fewnu-tontin.onrender.com/addTontine/leaveTontine/${tontineId}/${userId}`)
        .then(response => {
          console.log(response.data);
          // Mettez à jour l'état local en récupérant les tontines mises à jour
          axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
            .then((response) => {
              setTontines(response.data);
            })
            .catch((error) => {
              console.error('Erreur lors de la récupération des tontines :', error);
            });
        })
        .catch(error => {
          console.error('Erreur lors de la sortie de la tontine :', error);
        });
    }
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
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TypeTontine;
