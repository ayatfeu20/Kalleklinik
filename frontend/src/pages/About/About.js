import React from 'react'
import "./About.css";
import background from './/pexels-anete-lusina-4793220.jpg'

function About() {
  return (
    
    <section id="about" class="about">
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center',height: '50vh',width:'100%' }}>
     <h2 className='d-flex'>Om oss</h2>
     </div>
     </div>
      
    <div class="container" data-aos="fade-up">
      <div className='om'>
         
        <h2 className='d-flex' >Om oss</h2>
        <p>Hej och välkommen till min webbplats! Mitt namn är Khaled Daryan och jag är legitimerad sjukgymnast (som även idag kallas för fysioterapeut) och diplomerad massageterapeut. Redan som liten var träning och hälsa min passion. </p>
      </div>

  <div class="row">
  <div class="col-xl-5 col-lg-8 video-box d-flex justify-content-center
   align-items-stretch position-relative">
  <a href="https://youtu.be/vum7YzQC-zo" class="glightbox play-btn mb-4"></a></div>

  <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch
   justify-content-center py-5 px-lg-5">
          
          <div class="icon-box">
            <div class="icon"><i class="bx bx-heart"></i></div>
            <h4 class="title"><a href="">VEM JAG ÄR</a></h4>
            <p class="description">Jag fastnade för styrketräning när jag som femtonåring sommarjobbade i en affär som sålde utrustning för kampsport och styrketräning. 2005 började jag arbeta som friskvårds- och gyminstruktör, utbildade mig något år senare till diplomerad massör och sedan vidare till diplomerad massageterapeut. År2021 tog jag sjukgymnastexamen vid Lunds universitet. Jag går kontinuerligt nya kurser för att bygga på mina kunskaper och på den vägen är det.</p>
          </div>

          <div class="icon-box">
            <div class="icon"><i class="bx bx-health"></i></div>
            <h4 class="title"><a href="">ERFERNHET</a></h4>
            <p class="description">Jag är utbildad massageterapeut men även legitimerad sjukgymnast och jag har en solid grund inom rehabilitering samt kunskaper i olika medicinska, beteendevetenskapliga och humanbiologiska ämnen. Fördelarna med detta är att jag vid behov kan integrera specifik massage med andra manuella behandlingsmetoder och fysioterapeutiska metoder men jag utreder även om massage eller andra manuella metoder överhuvudtaget är en lämplig åtgärd vid de besvär som du har. Jag har utbildat massörer och massageterapeuter sedan år 2000 och är väl förtrogen med massage och muskelbehandlingsmetoder. Observera däremot jag har ett medicinskt ansvar att alltid göra en bedömning av vilka behandlingsmetoder eller vilken form av rehabilitering som är lämplig. Inledande samtal och undersökning ligger till grund för detta. Det går således inte att inom ramen för offentligfinansierad sjukvård att boka en specifik behandling som massage.</p>
          </div>

          <div class="icon-box">
            <div class="icon"><i class="bx bx-help-circle"></i></div>
            <h4 class="title"><a href="">HUR KAN JAG HJÄLPA DIG? </a></h4>
            <p class="description">Jag arbetar med rehabilitering och manuell terapi. Jag arbetar utifrån principerna grundlig undersökning, saklig bedömning och specifik behandling. En stor del av min inriktning är manuell terapi, det vill säga tekniker som sker med händerna som till exempel massage, mobilisering, manipulation med mera. Vid behov kan även nålbehandling, så kallad dry needling, ske för smärtlindring och avspänning. Rådgivning inom ergonomi och vägledning om egenvård med övningar är också en naturlig del i min vård vilket är där den moderna fysioterapin baseras på. Målet med mina åtgärder är att reducera dina smärtor, spänningar och återställa rörlighet samt funktion i musklerna. Du får även med dig mer kunskap om dina tillstånd och vad kan göra på egen hand. Jag tar emot både dig med långvariga, kroniska besvär men även dig med mer akuta tillstånd om tid finns.</p>
          </div>
          
        </div>
      </div>

    </div>
  </section>
  )
}

export default About
