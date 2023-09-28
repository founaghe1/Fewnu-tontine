import React from "react";
import './header.css'
import user from "../../../Assets/user.png";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-center header py-2 fixed-top" >
        <img src={user} alt="user" className="img"/>
        <p className="pt-3 ps-2">
          <li class="nav-item dropdown li text-light">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Faly Seck
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
