import React, { useEffect, useState } from 'react'
import './Edit.css'
import HeaderProfil from '../Profil/HeaderProfil';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import axios from 'axios';

const EditProfil = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    

  useEffect(() => {
    // Récupérez le nom de l'utilisateur depuis le localStorage
    const storedUser = localStorage.getItem("userData");

    // Assurez-vous que les données existent et sont valides
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setFirstName(userData.user.firstName);
      setLastName(userData.user.lastName);
      setPhoneNumber(userData.user.phoneNumber);
      setEmail(userData.user.email);
    }
  }, []);

  const handleUpdateProfile = () => {
    const updatedProfileData = {
      firstName,
      lastName,
      phoneNumber,
      email,
    };

    // Récupérez l'userId de l'utilisateur connecté depuis le localStorage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const userId = userData.user._id;

      console.log("userId : ",userData.user._id);

      // Effectuez une requête HTTP PUT pour mettre à jour le profil de l'utilisateur.
      axios.put(`https://fewnu-tontin.onrender.com/updateUser/updateUser/${userId}`, updatedProfileData)
        .then((response) => {
          // Mise à jour des données dans le localStorage
          userData.user.firstName = updatedProfileData.firstName;
          userData.user.lastName = updatedProfileData.lastName;
          userData.user.phoneNumber = updatedProfileData.phoneNumber;
          userData.user.email = updatedProfileData.email;
          localStorage.setItem("userData", JSON.stringify(userData));

          // Gérez la réponse de l'API ici (par exemple, affichez un message de succès).
          console.log(response.data);
        })
        .catch((error) => {
          // Gérez les erreurs ici (par exemple, affichez un message d'erreur).
          console.error(error);
        });
    }
  };

  // Gérez les changements dans les champs d'entrée avec des gestionnaires d'événements onChange.
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Layout>
    <div id='edit-profil' className='p-0'>
        <span className="ps-3">
            <Link to='/parametres' >
                <MdKeyboardArrowLeft className="retour" />
            </Link>
        </span>
        <div className='d-flex justify-content-center'>
            
            <HeaderProfil/>
        </div>
            <h1>Informations Générales</h1>
        <div className='container d-flex justify-content-center'>
            <form className='px-2 form'>
                <div class="mb-3"> 
                    <label for="exampleInputEmail1" class="form-label">Nom</label>
                    <input type="text" class="form-control" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Prénom</label>
                    <input type="text" class="form-control" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Téléphone</label>
                    <input type="number" class="form-control" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control" value={email} onChange={handleEmailChange} />
                </div>
                {/* <div class="mb-5">
                    <label for="exampleInputPassword1" class="form-label">Proffession</label>
                    <input type="text" class="form-control"/>
                </div> */}
                <div className='d-flex justify-content-center pb-2'> 
                    <Link>
                        <button type="submit" id="Edit-button" className='px-3 ' onClick={handleUpdateProfile} >Mettre à jour</button>
                    </Link>    
                </div>
            </form>
        </div>
    </div>
    </Layout>
  )
}

export default EditProfil
