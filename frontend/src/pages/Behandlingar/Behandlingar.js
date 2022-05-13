import React, {useState} from 'react';
import background from './/bas-peperzak-J1trUf0Lj3Q-unsplash.jpg';

import "./Behandlingar.css";
import { FaAngleRight } from 'react-icons/fa';



function Behandlingar() {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);
  const [hidden5, setHidden5] = useState(true);
  const [hidden6, setHidden6] = useState(true);
  return (
    <section id='behandlingar' className='behandlingar'>
    <div>
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center', height: '50vh',width:'100%'}}>
     <h2>Behandlingar</h2>
     </div>
     </div>
     
     <div class="container" data-aos="fade-up">
     <div className='Behandlingar'>
       <h2 className='d-flex'>Behandlingar</h2>
       <p>Rörelse – fysisk aktivitet och ansträngning – där pulsen och andningsfrekvens går upp och då musklerna får ta i är en av de viktigaste grundstenarna för både psykisk och fysisk hälsa!
         Olika skador, smärt- och sjukdomstillstånd involverar det muskuloskeletala systemet och hämmar individens förmåga till rörelse och fysisk aktivitet. Begränsningar i individens förmåga till rörelse har stora konsekvenser och ökar risken för en rad sjukdomar, fysisk och psykisk ohälsa, inaktivitet och för tidig död.
         Fysioterapeuter bedömer och diagnostiserar skador, smärt- och sjukdomstillstånd som involverar det muskuloskeletala systemet; leder, muskler, senor, ligament, nerver, brosk och ben. De arbetar med olika typer av icke kirurgisk och icke peroral (ämne via munnen) läkemedelsbaserad behandling. Fysioterapeuter arbetar istället med medicinsk träning, handledd rehabilitering, manuell behandling samt nål- och injektionsbehandling av olika läkemedel samt tillverkning och utprovning av avlastande hjälpmedel för att läka och stärka kroppens förmåga att utföra rörelser och att motstå belastning.</p>
       </div>
       </div>
    <div className='container d-flex row justify-content-between'>
    <div className='List col-lg-2 '> 
    <ul>
    <li><button id='button' >Rehabiliteringsträning<FaAngleRight className="down d-md-inline mx-1" onClick={() => setHidden(s => !s)} /></button>
    {!hidden ? <p>där patientens styrka alltid står i relation till rörligheten.<br></br> Övningarna består ofta av specifik eller allmän styrke- och konditionsträning. </p> : null}</li>

    <li><button id='button' >Råd om egonomi<FaAngleRight className="down d-md-inline mx-1" onClick={() => setHidden1(s => !s)}/></button>
    {!hidden1 ? <p>hur patienten skall klara sitt vardagliga liv. Jag har god kunskap i att göra arbetsplatsanalyser samt åtgärda eventuella problem.   </p> : null}</li>

    <li><button id='button' >Olika fysikaliska hjälpmedel<FaAngleRight className="down d-md-inline mx-1 " onClick={() => setHidden2(s => !s)}/></button>
    {!hidden2 ? <p>som TENS, värmebehandling användes som komplement i behandlingen. Inom till exempel idrottsskadebehandlingen   </p> : null}</li>

    <li><button id='button' >Muskeltöjning (stretching)<FaAngleRight className="down d-md-inline mx-1" onClick={() => setHidden3(s => !s)}/></button>
    {!hidden3 ? <p>används för att minska muskelspänning och normalisera rörlighet och funktion.   </p> : null}</li>

    <li><button id='button' >Triggerpunktsbehandling<FaAngleRight className="down d-md-inline mx-1" onClick={() => setHidden4(s => !s)}/></button>
    {!hidden4 ? <p>används för att minska lokal smärta men även smärtutstrålning. De spända muskelsträngarna behandlas med flera olika metoder där muskeltöjning är en gemensam komponent.  </p> : null}</li>

    <li><button id='button' >Mobilisering<FaAngleRight className=" down d-md-inline mx-1" onClick={() => setHidden5(s => !s)}/></button>
    {!hidden5 ? <p>är ett alternativ till manipulation. Här tas mycket specifika och led nära handgrepp som sedan utförs långsamt till skillnad från manipulationen. Även mobiliseringen används för att normalisera ledrörligheten och återvinna funktionen.   </p> : null}</li>

    <li><button id='button' >Kostrådgivare<FaAngleRight className="down d-md-inline mx-1" onClick={() => setHidden6(s => !s)}/></button>
    {!hidden6 ? <p>även vi arbetar med kostbehandling och rådgivning vid kostrelaterade sjukdomar och besvär. Vi arbetar också förebyggande med rådgivning och stöd för att förbättra matvanor och din hälsa   </p> : null}</li>
    
    </ul>
    </div>
    
    <div className='gall col py-5'>
    <div className='row col justify-content-center '>
    <img src="./images/10.jpg" alt="" className='col-lg-6'/>            
    <img src="./images/8.jpg" alt="" className='col-lg-6'/>            
    </div>

    <div className='row col justify-content-center '>
    <img src="./images/7.png" alt="" className='col-lg-6'/>            
    <img src="./images/1.png" alt="" className='col-lg-6'/>            
    </div>
    </div>
   </div>

    </div>


    </section>
  )
}

export default Behandlingar