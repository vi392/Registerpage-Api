const express = require("express");
const router = express.Router();

// import controllers.
const {helpproj,helpproj1} = require("../controllers/helpProj");
const { serviceproj, serviceproj1 } = require("../controllers/serviceproj");
const { profileproj, profileproj1 } = require("../controllers/profileproj");
//define Api routes.
router.post("/helpproj",helpproj);
router.post("/serviceproj",serviceproj);
router.post("/profileproj",profileproj);
router.get("/helpproj1",helpproj1);
router.get("/serviceproj1",serviceproj1);
router.get("/profileproj1",profileproj1);

module.exports = router;