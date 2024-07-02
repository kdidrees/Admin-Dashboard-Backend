const express = require("express");
const { createProperty } = require("../controllers/createProperty");
const upload = require("../middlewares/upload");
const verifyToken = require("../middlewares/jwtMiddleware");
const { editProperty } = require("../controllers/editProperty");
const { allProperty } = require("../controllers/allProperty");
const { getPropertyById } = require("../controllers/getPropertyById");
const {FilterProperties} = require("../controllers/filterController");
const {deletePropertyById} = require("../controllers/softDelete");
const {sendEmail}   = require("../controllers/contactEmail")

const router = express.Router();

// Route for creating new listing
router.post("/create-property", verifyToken, upload, createProperty);

// Route to edit property
router.put("/edit-property/:id", editProperty);

// get all properties
router.get("/all", allProperty);

// get property by id 
router.get("/getpropertybyid/:id",getPropertyById);

// soft delete the property by id 
router.delete('/delete-property/:id',deletePropertyById);

// send email route here 
router.post('/contact',sendEmail);

module.exports = router;
