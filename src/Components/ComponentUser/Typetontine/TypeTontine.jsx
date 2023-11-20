import React, { useState, useEffect } from "react";
import "./tontine.css";
import Layout from "../Layout/Layout";
import Cardtontine from "./Cardtontine";
import axios from 'axios';
import imgton1 from '../../../Assets/img-ton1.png';
import imgton2 from '../../../Assets/img-ton2.png';
import imgton3 from '../../../Assets/img-ton3.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TypeTontine = () => {
  const [tontines, setTontines] = useState([]);
  const [participatingTontines, setParticipatingTontines] = useState([]);

  useEffect(() => {
    // Fetch tontines from the server
    axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
      .then((response) => {
        setTontines(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tontines :', error);
      });

    // Fetch participating tontines from the server
    fetchParticipatingTontinesFromServer();
  }, []);

  const fetchParticipatingTontinesFromServer = async () => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      try {
        // Fetch participating tontine ids from the server for the current user
        const response = await axios.get(`https://fewnu-tontin.onrender.com/getParticipants/getParticipants/${userId}`);
        const participatingTontineIds = response.data;
        

        // Mise à jour de la liste des tontines participantes dans le stockage local
        localStorage.setItem("participatingTontines", JSON.stringify(participatingTontineIds));
        // localStorage.setItem("participatingTontineNames", JSON.stringify(participatingTontineName));

        // Mettez à jour l'état local avec la nouvelle liste
        setParticipatingTontines(participatingTontineIds);

      } catch (error) {
        console.error('Erreur lors de la récupération des tontines participantes :', error);
      }
    }
  };

  const fetchParticipationStatus = async (userId, tontineId) => {
    try {
      const response = await axios.get(`https://fewnu-tontin.onrender.com/checkParticipation/checkParticipation/${userId}/${tontineId}`);
      return response.data.isParticipating;
    } catch (error) {
      console.error('Erreur lors de la récupération du statut de participation:', error);
      return false;
    }
  };
  
  const handleParticipate = async (tontineId) => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;
  
      const isParticipating = await fetchParticipationStatus(userId, tontineId);
  
      if (isParticipating) {
        // L'utilisateur participe déjà
        console.log('L\'utilisateur participe déjà à cette tontine.');
        // Vous pouvez ajouter ici d'autres actions ou notifications
      } else {
        // L'utilisateur ne participe pas encore, vous pouvez ici gérer le cas où l'utilisateur participe
        try {
          // Ajoutez l'utilisateur à la tontine côté serveur
          await axios.post('https://fewnu-tontin.onrender.com/addTontineToUser/addTontineToUser', {
            userId: userId,
            tontineId: tontineId
          });
  
          // Ensuite, mettez à jour l'état local 
          participateInTontineOnServer(userId, tontineId, true);
          console.log('L\'utilisateur a rejoint la tontine avec succès.');
          toast.success('Vous avez rejoint la tontine avec succès');
        } catch (error) {
          console.error('Erreur lors de la participation à la Tontine côté serveur :', error);
          toast.error('Une erreur est survenue pendant votre participation');
          
        }
      }
    }
  };
  
  

  const handleLeave = async (tontineId) => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;
  
      // Assurez-vous que updatedParticipatingTontines est défini
      let updatedParticipatingTontines = await fetchParticipatingTontinesFromServer();
  
      const isParticipating = await fetchParticipationStatus(userId, tontineId);
  
      if (isParticipating) {
        // L'utilisateur participe, vous pouvez ici gérer le cas où l'utilisateur quitte
        try {
          // Retirez l'utilisateur de la tontine côté serveur
          await axios.put(`https://fewnu-tontin.onrender.com/updateTontineParticipations/updateTontineParticipation/${userId}/${tontineId}`, {
            participate: false
          });
  
          // Assurez-vous que updatedParticipatingTontines est défini avant d'appeler filter
          if (updatedParticipatingTontines) {
            // Mise à jour de la liste des tontines participantes dans le stockage local
            updatedParticipatingTontines = updatedParticipatingTontines.filter(id => id !== tontineId);
            setParticipatingTontines(updatedParticipatingTontines);
          }
  
          // Ensuite, mettez à jour l'état local ou effectuez d'autres actions si nécessaire
          participateInTontineOnServer(userId, tontineId, false);
          console.log('L\'utilisateur a quitté la tontine avec succès.');
          toast.success('Vous avez quitté la tontine avec succès');
        } catch (error) {
          console.error('Erreur lors du départ de la Tontine côté serveur :', error);
          toast.error('Erreur lors du départ de la tontine');
        }
      } else {
        // L'utilisateur ne participe pas encore
        console.log('L\'utilisateur ne participe pas encore à cette tontine.');
        
      }
    }  
  };
     
    
  const participateInTontineOnServer = async (userId, tontineId, participate) => {
    try {
      await axios.put(`https://fewnu-tontin.onrender.com/updateTontineParticipations/updateTontineParticipation/${userId}/${tontineId}`, { participate });
      // After updating the server, re-fetch participating tontines
      fetchParticipatingTontinesFromServer();
      // Fetch the updated tontines and update state
      axios.get('https://fewnu-tontin.onrender.com/tontines/getTontines')
        .then((response) => {
          setTontines(response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des tontines :', error);
        });
    } catch (error) {
      console.error('Error updating tontine participation on the server:', error);
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
              isParticipating={participatingTontines.includes(tontine._id)}
            />
          ))}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </Layout>
  );
};

export default TypeTontine;