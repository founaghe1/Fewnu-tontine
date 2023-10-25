import React from "react";
import "./Parametre.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

const Parametre = () => {
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Effacez les données de l'utilisateur du localStorage (ou tout autre moyen de stockage)
    localStorage.removeItem("userData"); // Supprimez la clé de stockage

    // Redirigez l'utilisateur vers la page d'accueil
    navigate("/idParCall");
  };
  return (
    <Layout>
      <div className="container mx-auto parameter ">
        <div className="">
          <p className="text-capitalize title-sec">profil</p>
          <div className="  justify-content-center">
            <div className="mb-3">
              <Link to="/profil" className="text-decoration-none text-dark">
                <div className="item-sec">
                  <p>Informations générales</p>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/modifInfoGeneral"
                className="text-decoration-none text-dark"
              >
                <div className="item-sec">
                  <p>Modifier les informations générales</p>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/modifCodePin"
                className="text-decoration-none text-dark"
              >
                <div className="item-sec">
                  <p>Modifier code PIN</p>
                </div>
              </Link>
            </div>
          </div>
          <p className="text-capitalize title-sec ">support</p>
          <div className=" justify-content-center">
            <div className="mb-3">
              <Link className="text-decoration-none text-dark">
                <div className="item-sec">
                  <p>Contact par téléphone</p>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link className="text-decoration-none text-dark">
                <div className="item-sec">
                  <p>Contact par whatsapp</p>
                </div>
              </Link>
            </div>
            <div className="mb-5">
              <Link className="text-decoration-none text-dark">
                <div className="item-sec">
                  <p>Devenir administrateur</p>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link className="text-decoration-none text-dark">
                <div className="item-sec" onClick={handleLogout}>
                  <Link className="text-dark text-decoration-none">
                    <p>Se déconnecter</p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Parametre;
