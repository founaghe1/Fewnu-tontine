import React from 'react'
import Layout from '../Layout/Layout'
import img from '../../../Assets/profill.png'
import wave from '../../../Assets/wave.png'
import orange from '../../../Assets/orange-money.png'
import './Ajouter.css'
import {GiTwoCoins} from 'react-icons/gi'
// import Button from '../Button/Button'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ValiderAjout = () => {
    const navigate = useNavigate();
    const [cotisationData, setCotisationData] = useState('');

    useEffect(() => {
        // Récupérez les données stockées dans le stockage local
        const storedData = localStorage.getItem('cotisationData');
        if (storedData) {
          setCotisationData(JSON.parse(storedData));
          console.log(storedData);
        }
      }, []);

      const handleEnregistrer = () => {
        // Envoyez les données à l'API
        axios.post("https://fewnu-tontin.onrender.com/addCotisation/addCotisation",cotisationData)
            .then((response) => {
                // Réussi à envoyer les données à l'API
                alert("Données enregistrées avec succès : " + JSON.stringify(cotisationData));

                // Nettoyez les données du local stockage 
                localStorage.removeItem('cotisationData');

                // Redirigez l'utilisateur où vous le souhaitez
                navigate('/mesCotisations');
            })
            .catch((error) => {
                // Gérez les erreurs ici
                console.error("Erreur lors de l'envoi des données à l'API : " + error);
            });
      };
    
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
                <p className='para2'>{cotisationData.tontine}</p>
                <p className='para3'>Montant</p>
                <p className='para4'>{cotisationData.cotisation}</p>
            </div>
            <div className="part3">
                <p className='para5'>Mode de payement :</p>
                {/* <p>Mode de paiement : {cotisationData.modePaiement.mensuel ? "Mensuel" : "Global"}</p> */}
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
                {/* <Button className="btn-form shadow" libelet="Enregistrer" onClick={ajouter} /> */}
                <button className='btn-form shadow' onClick={handleEnregistrer}>Enregistrer</button>
            </div>
        </div>
    </Layout>
  )
}

export default ValiderAjout
