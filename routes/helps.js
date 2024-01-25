const express = require("express");
const router = express.Router();

// import controllers.
const {helpproj,helpproj1} = require("../controllers/helpProj");
const { serviceproj, serviceproj1 } = require("../controllers/serviceproj");
//define Api routes.
router.post("/helpproj",helpproj);
router.post("/serviceproj",serviceproj);
router.get("/helpproj1",helpproj1);
router.get("/serviceproj1",serviceproj1);

module.exports = router;