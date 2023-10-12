import React, { useState } from "react";
// import Cotisation from "../ComponentUser/Cotisation/Cotisation";
import { useNavigate } from "react-router-dom";
import Cotiser from "../cotiser/Cotiser";

const fakeUserData = {
  username: "the_princetoutcouleur",
  password: "thiam123",
};

const LoginPage = () => {
  const navigate = useNavigate(); // Obtenez la fonction navigate
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === fakeUserData.username &&
      formData.password === fakeUserData.password
    ) {
      setLoggedIn(true);
      setError("");
      
      // Redirigez l'utilisateur vers la page de cotisation après une connexion réussie
      navigate("/cotiser");
    } else {
      setLoggedIn(false);
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  return (
    <div>
      {loggedIn ? (
        // <h1 className="mt-5">Bienvenue, <span className="bg-primary text-light">{formData.username}</span> ! Vous êtes connecté.</h1>
        // <Cotisation/>
        <Cotiser/>
      ) : (
        <div class="card m-5">
          <div class="card-body p-5 d-flex justfy-content-center align-items-center">
            <div>
            <form onSubmit={handleSubmit}>
              <h2>Connexion</h2>
              <div className="mb-3">
                <label className="me-3" htmlFor="username">Nom d'utilisateur</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="me-3" htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="mb-3">Se connecter</button>
              {error && <p className="error text-danger fw-bold">{error}</p>}
            </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
 