import React  from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Appointment from "./components/Appointment/Appointment";
import Display from "./components/Appointment/Display";
import Login from "./components/Appointment/Login";
import Confirmation from "./components/Appointment/Confirmation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Behandlingar from "./pages/Behandlingar/Behandlingar";
import Kontakt from "./pages/Kontakt/Kontakt";

import Footer from './components/Footer/Footer'

import Ont from "./pages/Home/Ont";
import Tid from "./pages/Home/Tid";
import Hand from "./pages/Home/Hand";
import Tillbaka from "./pages/Home/Tillbaka";
import Priser from "./pages/Home/Priser"

const App = () => {
  return (
  <div className="App"  >
   <Router>
     <Navbar />
      
     <Routes>
     <Route   exact path="/" element={<Home/>} /> 
     <Route   exact path="/About"element={<About/>} />
     <Route   exact path="/Behandlingar/" element={<Behandlingar/>} />
     <Route   exact path="/Kontakt" element={<Kontakt/>} />
     <Route   exact path="/Home/:id" element={<Ont/>} />
     <Route   exact path="/Home/Tid" element={<Tid/>} />
     <Route   exact path="/Home/Hand" element={<Hand/>} />
     <Route   exact path="/Home/Tillbaka" element={<Tillbaka/>} />
     <Route   exact path="/Home/Priser" element={<Priser/>} />
     <Route   exact path="/Appointment" element={<Appointment/>} />
     <Route   exact path="/Appointment/Display" element={<Display/>} />
     <Route   exact path="/Appointment/Login" element={<Login/>} />
     <Route   exact path="/Appointment/Confirmation" element={<Confirmation/>} />
     </Routes>
     </Router>
     
     <Footer/>
     </div>
    
  );
}

export default App;