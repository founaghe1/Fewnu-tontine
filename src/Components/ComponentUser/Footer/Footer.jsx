import React from "react";
import "./footer.css";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiUsersThreeLight } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };

  const getPageStyle = (pathname) => {
    return isPageActive(pathname) ? { backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', borderRadius: '50px' } : {};
  };

  return (
    <div className="footers">
      <footer className="py-2 d-flex justify-content-around footer">
        <p style={getPageStyle('/mesCotisations')}>
          <Link to='/mesCotisations'>
            <FaSackDollar className="text-dark fs-1 sacDalla" />
          </Link>
        </p>
        <p style={getPageStyle('/typeTontine')}>
          <Link to='/typeTontine'>
            <PiUsersThreeLight className="text-dark fs-1 users" />
          </Link>
        </p>
        <p style={getPageStyle('/ajouterCotisation')}>
          <Link to='/ajouterCotisation'>
            <IoIosAddCircleOutline className="text-dark fs-1 plusAdd" />
          </Link>
        </p>
        <p style={getPageStyle('/parametres')}>
          <Link to='/parametres'>
            <FiSettings className="text-dark fs-1 setting" />
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
