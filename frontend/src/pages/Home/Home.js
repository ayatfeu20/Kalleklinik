import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Home.css";
import background from './/Image/pexels-karolina-grabowska-4397831.jpg'

import { FaLocationArrow } from 'react-icons/fa';

export default function Home() {
    return (
        <section className="home" >
          
        <div class="carousel-container  d-flex ">
            
            <div className="welcome">
            <h1>Vällkommen <br></br>till<br></br> Kalleklinik</h1><h4>Fysioterapi & Rehab</h4>
            <a href="/about" class="about-btn scrollto"><span class=" d-md-inline">Läs</span> mer</a>
            </div>  
             
            <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false}  dynamicHeight={true} >
            
                <div> <img src="./images/5-2.png" className="pt-100" alt="" /></div>
                <div> <img src="./images/joyce-mccown-IG96K_HiDk0-unsplash.jpg" alt="" /></div>
                <div> <img src="./images/9.jpg" alt="" /></div>
                <div> <img src="./images/pexels-anete-lusina-6353850.jpg" alt="" /> </div>
                <div> <img src="./images/6.jpg" alt="" /></div>
                <div> <img src="./images/dumbbells-g4fc49991e_1920.jpg" alt="" /> </div>
                <div> <img src="./images/IMG-20220410-WA0004.png" alt="" /></div>
           </Carousel>
              
        </div>
        
<div class="container featured-services" data-aos="fade-up">

  <div class="row">
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div class="icon-box">
        <h4 class="title"><a href="./Home/Ont"> Känner du ont?</a></h4>
        <img src= "../images/2.png" class="img-fluid" alt="" />
        <a href="./Home/Ont"><p class="description">Läs mer : ...</p></a>
      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div class="icon-box">
        <h4 class="title"><a href="./Home/Tid">Boka tid hos oss</a></h4>
        <img src= "../images/boka.png" class="img-fluid" alt="" />
        <a href="./Home/Tid"><p class="description">Läs mer : ...</p></a>
      </div>
    </div>
    
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div class="icon-box">
        <h4 class="title"><a href="./Home/Hand">Ta hand om dig</a></h4>
        <img src= "../images/pngwing7.com.png" class="img-fluid" alt="" />
        <a href="./Home/Hand"><p class="description">Läs mer : ...</p></a>
      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div class="icon-box">
        <h4 class="title"><a href="./Home/Tillbaka">Tillbaka till ditt liv</a></h4>
        <img src= "../images/live.com.png" class="img-fluid" alt="" />
        <a href="./Home/Tillbaka"><p class="description">Läs mer : ...</p></a>
      </div>
    </div>

  </div>
</div>

<div className="hitta d-flex ">
 <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center',height: '50vh',width:'100%' }}></div>
 <a href="/Kontakt" class="contact-btn scrollto justify-content-between"><FaLocationArrow className="d-flex justify-content-center px-2" size="50"/><span class=" d-md-inline justify-content-between h3">Hitta oss</span> </a>
 </div>
 
 <div className=" pris row justify-content-between">
 <h5 className="col">Vi tar emot friskvård :</h5>
 <a href="/Home/Priser" className=" col-lg-2">Priser</a>
 </div>
 <div className="betalning d-flex justify-content-center">
  <img src= "../images/epassi-1.png" class="img-fluid" alt=""/>
  <img src= "../images/actiway.png" class="img-fluid" alt=""/>
  <img src= "../images/benify.png" class="img-fluid" alt=""/>
  <img src= "../images/wellnet.png" class="img-fluid" alt=""/>
 </div>

</section>
    );
}
