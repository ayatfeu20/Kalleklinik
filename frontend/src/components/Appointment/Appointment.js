import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
import "./Appointment.css"
import { useNavigate } from 'react-router-dom';

function Appointment() {

const [listOfAppointments, setListOfAppointments] = useState([]);
const [firstname, setFirstname] = useState(" ");
const [lastname, setLastname] = useState(" ");
const [phone, setPhone] = useState(0);
const [email, setEmail] = useState(" ");
const [treatment, setTreatment] = useState(" ");
const [date, setDate] = useState(" ");
const [time, setTime] = useState(" ");
const navigate = useNavigate();



useEffect(() => {
  Axios.get("https://kalleklinik-server.herokuapp.com/getAppointments").then((response) => {
    setListOfAppointments(response.data);
  });
}, []);

const createAppointment = () => {
  Axios.post("https://kalleklinik-server.herokuapp.com/createAppointment", {
    firstname,
    lastname,
    phone,
    email,
    treatment,
    date,
    time,
     }).then((response) => {
     setListOfAppointments([
      ...listOfAppointments,
      
      {
        firstname,
        lastname,
        phone,
        email,
        treatment,
        date,
        time,
        
      },
      navigate("/Appointment/Confirmation")
    ]);
   });
   
  };
 
return (
  <div className="Appointment">
    <div className='card-display '>
    <h6 >Är du admin?</h6>
    <a href="./Appointment/Login" class="display-btn scrollto aligin-items-left"><span class=" d-md-inline">Visa alla tider</span></a>
    </div>
    <div className="title">
    <h1 className='text-center mt-4'>Boka en tid</h1>
    <h3 className='text-center mb-4'>Skriva in dina uppgifter</h3>
    </div>
         
    <div className="formtid">
      <input
        type="text"
        placeholder="Förenamn..."
        onChange={(event) => {
          setFirstname(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Efternamn"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Din telefonnummer"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="E-post"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      
      <input
        type="text"
        placeholder="Välja Behandling"
        onChange={(event) => {
          setTreatment(event.target.value);
        }}
        />
       
      <input
        type="date"
        placeholder="date..."
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Tid..."
        onChange={(event) => {
          setTime(event.target.value);
        }}
      />
      
      <button type="submit" onClick={createAppointment } > Skriv in</button>
    
    </div>
    
 </div>
  
);
}
export default Appointment;