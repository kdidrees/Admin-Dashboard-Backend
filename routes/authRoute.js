const express = require("express");

const { register } = require("../controllers/signupController");
const { login } = require("../controllers/loginController");
const verifyToken = require("../middlewares/jwtMiddleware");
const { getAdminDetails } = require("../controllers/getAdminDetails");
const { userLogout } = require("../controllers/logoutController");

const router = express.Router();

// Route for admin register
router.post("/register-admin", verifyToken, register);

// Router for admin Login

router.post("/login", login);

router.get("/", verifyToken, getAdminDetails);

router.get("/logout", userLogout);

module.exports = router;
