const express = require("express");

const {register} = require("../controllers/signupController")
const {login} = require("../controllers/loginController")

const router = express.Router();


// Route for admin register
router.post("/register-admin",register);

// Router for admin Login

router.post("/login",login);


module.exports = router;
