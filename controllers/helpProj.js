//import the module.
const helpp = require("../modules/help");

// define route handler.
exports.helpproj = async(req,res) => {
     try{
      // extract title and descripation from request body
      const{issue,descripation,date,lastUpdate} = req.body;
      //create a new Todo obj and insert in DB
      const response = await helpp.create({issue,descripation,date,lastUpdate});
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
exports.helpproj1 = async(req,res) => {
    try{
        // featch all item from database.
         const response = await helpp.find({});
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