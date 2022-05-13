import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FaMobile, FaEnvelope } from 'react-icons/fa';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    <>

<div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center justify-content-between">
       <i><FaEnvelope className="mx-1"/></i><a href="mailto:info@kalleklinik.se">info@kalleklinik.se</a>
       <i><FaMobile /></i>076 765 14 73
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
      <div class="social-container">
       <a href="https://www.youtube.com/channel/UC-VsyQTH4eSWxwxqihvsE4Q"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube}  />
      </a>
      <a href="https://www.facebook.com/kalleklinik/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook}  />
      </a>
      <a href="https://www.twitter.com/kalleklinik" className="twitter social">
        <FontAwesomeIcon icon={faTwitter}  />
      </a>
      <a href="https://www.instagram.com/kalleklinik"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram}  />
      </a>
     </div>

      </div>
    </div>
  </div>
<nav className="navbar d-flex navbar-light order-last order-lg-0 align-items-center justify-content-between" >
  <div className="container-fluid">
  
    <div className="navbar-brand">
    <a href="/"><img src= "../images/2(1).png" class="img-fluid" alt="HomePage" /></a>

    <ul ref={linksContainer} className={toggle ? "active" : ""}>

          <li>
          <Link onClick={boxHandler} to="/">Hem</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/About">Om oss</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Behandlingar">Behandlingar</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Kontakt">Kontakt</Link>
          </li>
                    
        </ul>

        <a href="./Appointment" class="appointment-btn scrollto"><span class=" d-md-inline">Boka</span> en tid</a>    
     </div>
     
         

    <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
  </div>
</nav>
</>

      
    );
};

export default Navbar