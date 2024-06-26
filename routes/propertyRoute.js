const express = require("express");

const {createProperty} = require("../controllers/createProperty");

const router = express.Router();


// Route for creating new listing
router.post("/create-property",createProperty);



module.exports = router;
