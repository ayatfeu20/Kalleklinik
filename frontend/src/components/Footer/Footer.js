import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FaMobile, FaEnvelope } from 'react-icons/fa';




const Footer = () => {
  return(
      <div className='main-footer bg-gradient bg-opacity-50'>
          
         
          <div className='container '>
              <div className='row'>

                    {/* column1 */}
                    <div className='col' >
                    <img src= "../images/logo vit.png" class="img-fluid " alt=""  />
                  </div>
                  {/* column1 */}
                  <div className='col'>
                      <h4>Kontakta oss</h4>
                      <ul className='list-unstyled'>
                          <li>Säbyygatan 9</li>
                          <li>72 341 Västerås</li>
                          <li class=" d-flex ">
                          <FaEnvelope className="my-1 mr-1"/><a href="mailto:info@kalleklinik.se">info@kalleklinik.se</a></li>
                          <li class=" d-flex "><FaMobile className="my-1 mr-1" />076 765 14 73</li>
                      </ul>
                    </div>
                 
                  {/* column3 */}
                   <div className='col'>
                      <h4 >Följa oss</h4>
                      <ul className='list-unstyled'>
                          <a href="https://www.youtube.com/channel/UC-VsyQTH4eSWxwxqihvsE4Q" className="youtube social">
                              <FontAwesomeIcon icon={faYoutube} size="2x" />
                              </a>
                              <a href="https://www.facebook.com/kalleklinik/" className="facebook social">
                              <FontAwesomeIcon icon={faFacebook} size="2x"  />
                              </a>
                              <a href="https://www.twitter.com/kalleklinik" className="twitter social">
                              <FontAwesomeIcon icon={faTwitter} size="2x" />
                              </a>
                              <a href="https://www.instagram.com/kalleklinik" className="instagram social">
                              <FontAwesomeIcon icon={faInstagram} size="2x"  />
                              </a>
                      </ul>
                  </div>
              </div>
              <hr />
              </div>
              <div className='row aligin-items-center justify-content-center Footer-bottom '>
                  <p className='col-sm aligin-items-center justify-content-center'>
                      &copy;{new Date().getFullYear()} | All right reserved | Terms Of Service | Privacy
                  </p>
              </div>
          

          
      </div>

      
  )
}

export default Footer;