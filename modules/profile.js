// import mongoose.
const mongoose = require("mongoose");
// route handler.
const ProfileSchema = new mongoose.Schema({
    yourName:{
        type:String,
        require:true, 
       },
       BusinessName:{
        type:String,
        require:true, 
       },
       PhoneNo:{
        type:String,
        require:true, 
       },
       email:{
        type:String,
        require:true, 
       },
       BusinessWebsiteLink:{
        type:String,
        require:true, 
       },
       GSTIN:{
        type:String,
        require:true, 
       },
       State:{
        type:String,
        require:true, 
       },
       Address:{
        type:String,
        require:true, 
       },
       BankName:{
        type:String,
        require:true, 
       },
       Branch:{
        type:String,
        require:true, 
       },
       AccountNo:{
        type:String,
        require:true, 
       },
       IFSC:{
        type:String,
        require:true,
       },
       
})
module.exports = mongoose.model("proo",ProfileSchema);