const express = require("express");

const {register} = require("../controllers/signupController")

const router = express.Router();


// Route for user login 
router.post("/register-admin",register);


module.exports = router;
