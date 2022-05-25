import { useState, useEffect } from "react";
import Axios from "axios";

import Card from 'react-bootstrap/Card';

function Display() {
    const [listOfAppointments, setListOfAppointments] = useState([]);
   

  useEffect(() => {
    Axios.get("https://kalleklinik-server.herokuapp.com/getAppointments").then((response) => {
      setListOfAppointments(response.data);
    });
  }, []);

  
  return (
    <div className="Display">
      <div className="appointmentsDisplay">
        {listOfAppointments.map((appointment) => {
          return (
<div className="displaycard">
 <div className="row d-flex justify-content-center" >
  
    <div className="col-lg-6   ">
      <Card className="border-2 m-4 bg-success text-white">
        
        <Card.Body>
          <Card.Title className="text-center bg-primary">Bokad</Card.Title>
          <Card.Text>
          <h5>Firstname: {appointment.firstname}</h5>
          <h5>Lastname: {appointment.lastname}</h5>
          <h5>Phone: {appointment.phone}</h5>
          <h5>Email: {appointment.email}</h5>
          <h5>Treatment: {appointment.treatment}</h5>
          <h5>Date: {appointment.date}</h5>
          <h5>Time: {appointment.time}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
     </div>
    </div>
   </div>
          );
        })}
  </div>

  </div>
  );
}

export default Display;