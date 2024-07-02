const express = require("express");
const {sendEmail}   = require("../controllers/contactEmail")


const router = express.Router();

// send email route here 
router.post('/send',sendEmail);


module.exports = router;