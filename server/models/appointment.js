const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
        type: String,
        required: true,
      },    
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    treatment: {
        type: String,
        required: true,
      
       
    },
    date: {
        type: Date,
        required: true,
        
    },
   time: {
        type: String,
        required: true,
      },
  });
  
  const AppointmentModel = mongoose.model("appointments", AppointmentSchema);
  module.exports = AppointmentModel