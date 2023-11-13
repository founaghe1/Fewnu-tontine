import React, { useEffect, useState } from "react";
import "./Profil.css";
import HeaderProfil from "./HeaderProfil";
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const Profil = () => {

  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [staut, setStatut] = useState("")

    

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
      setStatut(userData.user.role);
    }
  }, []);



  return (
    <Layout>
    <div id="profil" className="container-fluid p-0">
      <span className="ps-3">
        <Link to='/parametres' >
          <MdKeyboardArrowLeft className="retour" />
        </Link>
      </span>
      
      <HeaderProfil />
      <div className="mb-5">
        <div className="bande-verte">
          <h1 className="text-capitalize">informations générales</h1>
        </div>
        <div className="contenue">
          <div className="d-flex justify-content-between px-3 py-3 border">
            <p className="text-capitalize">prénom</p>
            <p className="text-capitalize text-center">{firstName}</p>
          </div>
          <div className="d-flex justify-content-between px-3 py-3 border">
            <p className="text-capitalize">nom</p>
            <p className="text-capitalize text-center">{lastName}</p>
          </div>
          <div className="d-flex justify-content-between px-3 py-3 border">
            <p className="text-capitalize">statut</p>
            <p className="text-capitalize text-center">{staut}</p>
          </div>
          <div className="d-flex justify-content-between px-3 py-3 border">
            <p className="text-capitalize">e-mail</p>
            <p className="text text-center">{email}</p>
          </div>
          <div className="d-flex justify-content-between px-3 py-3 border">
            <p className="text-capitalize">Téléphone</p>
            <p className="text text-center">{phoneNumber}</p>
          </div>
        </div>
        <div className="bande-verte">
          <h1 className="text-capitalize">statistques</h1>
        </div>
        <div className="contenue">
          <div className="d-flex justify-content-between px-3 py-3 border">
            <p className="text-capitalize">nombre de cotisations effectuées</p>
            <p className="text-capitalize text-center">7</p>
          </div>
          <div className="d-flex justify-content-between px-3 py-3 ">
            <p className="text-capitalize">nombre de cotisations restantes</p>
            <p className="text-capitalize text-center">5</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profil;
