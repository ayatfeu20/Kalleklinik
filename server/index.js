const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AppointmentModel = require('./models/appointment')
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://dbKalle:Ayatzaki82@cluster0.cz6gr.mongodb.net/db?retryWrites=true&w=majority');

app.get("/getAppointments", (req, res) => {
    AppointmentModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });

  app.post("/createAppointment", async (req, res) => {
    const appointment = req.body;
    const newAppointment = new AppointmentModel(appointment);
    await newAppointment.save();
  
    res.json(appointment);
  });

app.listen(5000, () => {
  console.log("Yaaaaahoooo SERVER RUNS PERFECTLY!");
});