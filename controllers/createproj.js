//import the module.
const CreateAcc = require("../modules/CreateAcc");
const bcrypt = require("bcryptjs");
const JWT = require('jsonwebtoken');
// const CreateAcc = require("../modules/CreateAcc");

 
//register 

const registerController = async (req,res) =>{


    try{
        const {username,email,password,confirmpassword} = req.body

        //validation
        if(!username || !email || !password || !confirmpassword){
            return res.status(500).send({
                success:false,
                message:"please provide All Fields"
            })
        }

        //check
        const exisiting = await CreateAcc.findOne({email});
        if(exisiting){
            return res.status(500).send({
                success:false,
                message:"Email allready Registered please Login"
            })
        }
      
        //hashing paswword

        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password,salt);


        //create new  User
        const user = await CreateAcc.create({username,email,password:hashedPassword,confirmpassword});

        res.status(201).send({
            success:true,
            message:"Successfully Registered",
            user,
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in register API",
            error
        })
    }

};

//LOGIN
const loginController = async(req,res) =>{

    try{
        const {email,password} =req.body

        //validation
        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:"Please provide Email or Password"
            })
        }

        //check user
        const user = await CreateAcc.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not Found"
            })
        }
        //check user password || compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:"Invalid credential"
            })
        }

        //token generate
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        });


        res.status(200).send({
            success:true,
            message:"Login Successfully",
            token,
            user
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Login API",
            error
        })
    }

}

//logout Controller
const logout = async(req,res)=>{
    try{

      const token = req.body.token || req.query.token || req.headers["authorization"]

      const bearer =token.split(' ');
      const bearerToken = bearer[1];

      const newBlacklist = new Blacklist({
        token:bearerToken
      })

      await newBlacklist.save();

      res.status(200).send({
        success:true,
        message:"you are Logged Out!"
      })

    }catch(error){
      console.log(error);
      res.status(500).send({
        success:false,
        message:"Error in Logout Profile API"
      })

    }
  }
 
// define route handler. for get Api.
exports.Createproj1 = async(req,res) => {
    try{
        // featch all item from database.
         const response = await crea.find({});
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

module.exports = {registerController,loginController,logout}