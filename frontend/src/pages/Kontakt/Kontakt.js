import React from 'react'
import ContactForm from './ContactForm'
import "./Kontakt.css";
import background from './/contact-us-gff87e215a_1920.jpg'
import { FaPhone,FaMapMarkerAlt,FaEnvelope} from 'react-icons/fa';

import figure from 'react-bootstrap/figure';

function Kontakt() {
  return (
    <section id="contact" class="contact">
      <div>
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center',height: '50vh',width:'100%' }}>
     <h2>Kontakta oss</h2>
     </div>
     </div>

     <div class="container" data-aos="fade-up">
     <div className='kontakt '>
       <h2 className='d-flex'>Kontakta oss</h2>  </div>
          
            
      <div class="container d-flex justify-content-center ">
        <div className='kontaktform row  '>
       <div className='col-lg-6  d-flex flex-column align-items-stretch
   justify-content-center py-5   '> 
       <figure>
          <figure.Image src="./images/11.jpg" className='img-fluid rounded'  alt=""  width={500}  height={400} /> 
          <figcaption className=' font-weight-bold bg-light d-flex text-right'>Khaled Daryan</figcaption>
       </figure>
          </div>
          <div class="col mx-8 py-5 ">
            <div class="info rounded">
              <div class="address">
                <i><FaMapMarkerAlt/></i>
                <h6>Adress</h6>
                <p>Säbygatan 9</p>
              </div>

              <div class="email">
                <i><FaEnvelope/></i>
                <h6>E-post</h6>
                <p>khaled@kalleklinik.se</p>
              </div>

              <div class="phone">
                <i><FaPhone/></i>
                <h6>Telefonnummer</h6>
                <p>076 765 14 73</p>
              </div>
            </div>
          </div>
          
      </div>
      </div>
      
        <div className='containrt d-flex justify-content-center'>
        <div className='map row'>
        <div className='map-contact d-flex justify-content-center'>
        
        <div class="row  ">
        <div className='col-lg-4 py-1  '>
      <ContactForm />
      </div>
         <div className='col-lg-8 pt-1 mx-0 '>
           <img src="./images/map.png" className='rounded' alt="" /> 
           </div>
          </div>
          </div>
          </div>
          </div>
        
        

      








    </div>

    </div>
    </section>
  )
}

export default Kontakt