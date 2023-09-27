import React from "react";
import "./footer.css";
import { FaSackDollar } from "react-icons/fa6";
import { GrAddCircle } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer className="py-4 d-flex justify-content-around footer ">
        <p>
          <FaSackDollar className="text-dark fs-1" />
        </p>
        <p>
          <GrAddCircle className="text-dark fs-1" />
        </p>
        <p>
          <BiUser className="text-dark fs-1" />
        </p>
        <p>
          <FiSettings className="text-dark fs-1" />
        </p>
      </footer>
    </div>
  );
};

export default Footer;
