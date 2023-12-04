import React from "react";
import './header.css'
import user from "../../../Assets/user.png";
import { useEffect, useState } from "react";

const Header = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Récupérez le nom de l'utilisateur depuis le localStorage
    const storedUsername = localStorage.getItem("userData");

    
    if (storedUsername) {
      const userData = JSON.parse(storedUsername);
      setFirstName(userData.user.firstName);
      setLastName(userData.user.lastName); 
    }
  }, []);

  return (
    <div className="headers"> 
      <div className="d-flex justify-content-between header py-2 " >
        <div className="ps-4">
          <img src={user} alt="user" className="img"/>
          <span className="text-light ps-2">{firstName} {lastName}</span>
        </div>
         
        <p className="pt-3 pe-4">
          <li class="nav-item dropdown li text-light">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </p>
      </div>
    </div>
  );
};

export default Header;
