const express = require("express");

const {userLogin}  = require("../controllers/loginController");

const router = express.Router();


// Route for user login 
router.post("/login",userLogin);


module.exports = router;
