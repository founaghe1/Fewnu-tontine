import React from "react";
import "./footer.css";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiUsersThreeLight } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => { 
  return (
    <div className="footers">
      <footer className="py-2 d-flex justify-content-around footer ">
        <p className="">
          <Link to='/mesCotisations'>
            <FaSackDollar className="text-dark fs-1 sacDalla" />
          </Link>
        </p>
        <p>
          <Link to='/typeTontine'>
            <PiUsersThreeLight className="text-dark fs-1 users" />
          </Link>
        </p>
        <p>
          <Link to='/ajouterCotisation'>
            <IoIosAddCircleOutline className="text-dark fs-1 plusAdd" />
          </Link>
        </p>
        <p> 
          <Link to='/parametres'>
            <FiSettings className="text-dark fs-1 setting" />
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
