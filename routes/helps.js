const express = require("express");
const router = express.Router();


const authMiddleware = require('../Middleware/authmiddleware');

// import controllers.
const {helpproj,helpproj1} = require("../controllers/helpProj");
const { serviceproj, serviceproj1 } = require("../controllers/serviceproj");
const { profileproj, profileproj1 } = require("../controllers/profileproj");
const { registerController, loginController, logout} = require('../controllers/createproj');

//define Api routes.
router.post("/helpproj",helpproj);
router.post("/serviceproj",serviceproj);
router.post("/profileproj",profileproj);
router.get("/helpproj1",helpproj1);
router.get("/serviceproj1",serviceproj1);
router.get("/profileproj1",profileproj1);
router.get("/Createproj1",createproj1);

//Register \\ post
router.post('/register',registerController) 

//LOGIN || POST
router.post('/login',loginController);

//logout
router.get("/logout",authMiddleware,logout);


module.exports = router;