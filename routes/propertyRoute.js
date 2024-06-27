const express = require("express");
const {createProperty} = require("../controllers/createProperty");
const upload = require("../middlewares/upload");

const router = express.Router();


// Route for creating new listing
router.post("/create-property",upload,createProperty);



module.exports = router;
