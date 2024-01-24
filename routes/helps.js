const express = require("express");
const router = express.Router();

// import controllers.
const {helpproj,helpproj1} = require("../controllers/helpProj");
//define Api routes.
router.post("/helpproj",helpproj);
router.get("/helpproj1",helpproj1);

module.exports = router;