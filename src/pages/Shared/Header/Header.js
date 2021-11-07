import {
  faCapsules,
  faHome,
  faPen,
  faSignInAlt,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const logo = <FontAwesomeIcon icon={faCapsules}></FontAwesomeIcon>;
const home = <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>;
const customer = <FontAwesomeIcon icon={faUserSecret}></FontAwesomeIcon>;
const pen = <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>;
const signIn = <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>;
const Header = () => {
  return (
    <div className="header flex justify-between p-4 bg-white border-b shadow">
      <div className="flex text-green-500">
        <span className="text-2xl mr-1">{logo}</span>
        <p className="text-2xl font-bold ">Health Freak</p>
      </div>
      <div >
        <ul className="flex justify text-xl">
          <li>
            <NavLink to="/home">
              <span>{home}</span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <span>{customer}</span>
              <span>Customer</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>{pen}</span>
              <span>About US</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <span>{signIn}</span>
              <span>Log In</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
