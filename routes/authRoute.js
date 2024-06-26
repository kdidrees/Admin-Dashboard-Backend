const express = require("express");

const {register} = require("../controllers/signupController")
const {login} = require("../controllers/loginController");
const verifyToken = require("../middlewares/jwtMiddleware");
const {getAdminDetails} = require("../controllers/getAdminDetails");

const router = express.Router();


// Route for admin register
router.post("/register-admin",register);

// Router for admin Login

router.post("/login",login);

router.post("/",verifyToken,getAdminDetails);


module.exports = router;
