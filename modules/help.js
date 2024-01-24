// import mongoose.
const mongoose = require("mongoose");
// route handler.
const HelpSchema = new mongoose.Schema({
   issue:{
    type:String,
    require:true, 
   },
   descripation:{
    type:String,
    require:true,
   //  maxLength:50,
},
  date:{
      type:String,
      require:true,
  },
  lastUpdate:{
    type:String,
    require:true,
  },
})
//
module.exports = mongoose.model("helpp",HelpSchema);