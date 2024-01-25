// import mongoose.
const mongoose = require("mongoose");
// route handler.
const ServiceSchema = new mongoose.Schema({
     serviceName:{
        type:String,
        require:true,
     },
     servicePrice:{
        type:String,
        require:true,
     },
     serviceCategory:{
        type:String,
        require:true,
     },
     HsnCode:{
         type:String,
         require:true,
     },
     Tax:{
        type:String,
        require:true,
     },
     photo:{
        type:String,
        require:true,
     },
})

module.exports = mongoose.model("serv",ServiceSchema);