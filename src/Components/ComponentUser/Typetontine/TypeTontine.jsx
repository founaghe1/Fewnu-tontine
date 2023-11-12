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
  const [participatingTontines, setParticipatingTontines] = useState({});

  useEffect(() => {
    axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
      .then((response) => {
        setTontines(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tontines :', error);
      });

    // Fetch the participating tontines from the server
    fetchParticipatingTontinesFromServer();
  }, []);

  const fetchParticipatingTontinesFromServer = () => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      // Fetch participating tontines from the server
      axios.get(`https://fewnu-tontin.onrender.com/getPaticipants/${userId}/participatingTontines`)
        .then((response) => {
          setParticipatingTontines(response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des tontines participantes :', error);
        });
    }
  };

  const participateInTontineOnServer = async (userId, tontineId, participate) => {
    try {
      await axios.post(`https://fewnu-tontin.onrender.com/updateTontineParticipation/${userId}/${tontineId}`, { participate });
      // After updating the server, re-fetch participating tontines
      fetchParticipatingTontinesFromServer();
    } catch (error) {
      console.error('Error updating tontine participation on the server:', error);
    }
  };

  const handleParticipate = (tontineId) => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      // Update the server with the participation status
      participateInTontineOnServer(userId, tontineId, true);

      axios.post(`https://fewnu-tontin.onrender.com/addTontine/participateTontine/${tontineId}/${userId}`)
        .then(response => {
          console.log(response.data);
          // Fetch the updated tontines and update state
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
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      // Update the server with the participation status
      participateInTontineOnServer(userId, tontineId, false);

      axios.post(`https://fewnu-tontin.onrender.com/addTontine/leaveTontine/${tontineId}/${userId}`)
        .then(response => {
          console.log(response.data);
          // Fetch the updated tontines and update state
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
              onLeave={() => handleLeave(tontine._id)}
              isParticipating={participatingTontines[tontine._id]} // Add this prop to indicate if the user is participating
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TypeTontine;
