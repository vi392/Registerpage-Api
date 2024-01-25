//import the module.
const proo = require("../modules/profile");

// define route handler.
exports.profileproj = async(req,res) => {
    try{
        // extract title and descripation from request body
        const{yourName,BusinessName,PhoneNo,email,BusinessWebsiteLink,GSTIN, State,Address,BankName,
            Branch,AccountNo, IFSC} = req.body;
        //create a new Todo obj and insert in DB
        const response = await proo.create({yourName,BusinessName,PhoneNo,email,BusinessWebsiteLink,GSTIN, State,Address,BankName,
            Branch,AccountNo, IFSC});
   // send a json responce with a success flag
   res.status(200).json(
       {
           success:true,
           data:response,
           message:'Entry Created Successfully'
  
       }
   );
       }
       catch(err){
        console.log(err);
        res.status(500)
        .json(
          {
            success:false,
             data:"internal server error",
             message:err.message, 
          }
        )
     }
}
// define route handler. for get Api.
exports.profileproj1 = async(req,res) => {
    try{
        // featch all item from database.
         const response = await proo.find({});
      // response.
      res.status(200)
      .json(
        {
            success:true,
            response,
            message:'Entry Created Successfully'

   }
      );
        
    }
    catch(err){
        console.error(err);
        // console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                 error:"internal server error",
                message: "server error", 
            }
        );
    }
}