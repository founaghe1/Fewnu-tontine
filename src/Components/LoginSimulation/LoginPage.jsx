import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cotisation from "../ComponentUser/Cotisation/Cotisation";

const fakeUserData = {
  username: "the_princetoutcouleur",
  password: "thiam123",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Verification s'il y a des identifiants de connexion dans le Local Storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      // Si des identifiants sont présents, remplissez le formulaire et essayez automatiquement de vous connecter
      setFormData({ username: storedUsername, password: storedPassword });
      handleLogin(storedUsername, storedPassword);
    }
  }, []); // Le tableau vide signifie que cela s'exécute une seule fois au chargement de la page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (enteredUsername, enteredPassword) => {
    if (enteredUsername === fakeUserData.username && enteredPassword === fakeUserData.password) {
      setLoggedIn(true);
      setError("");
      // Stockez les identifiants dans le Local Storage après une connexion réussie
      localStorage.setItem("username", enteredUsername);
      localStorage.setItem("password", enteredPassword);
      // Redirigez l'utilisateur vers la page de cotisation après une connexion réussie
      navigate("/mesCotisations");
    } else {
      setLoggedIn(false);
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    handleLogin(username, password);
  };

  return (
    <div>
      {loggedIn ? (
        <Cotisation/>
      ) : (
        <div className="card m-5">
          <div className="card-body p-5 d-flex justify-content-center align-items-center">
            <div>
              <form onSubmit={handleSubmit}>
                <h2>Connexion</h2>
                <div className="mb-3">
                  <label className="me-3" htmlFor="username">
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="me-3" htmlFor="password">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit">Se connecter</button>
                {error && <p className="error">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
