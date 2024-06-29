const express = require("express");
const { createProperty } = require("../controllers/createProperty");
const upload = require("../middlewares/upload");
const verifyToken = require("../middlewares/jwtMiddleware");
const { editProperty } = require("../controllers/editProperty");
const { allProperty } = require("../controllers/allProperty");
const { getPropertyById } = require("../controllers/getPropertyById");

const router = express.Router();

// Route for creating new listing
router.post("/create-property", verifyToken, upload, createProperty);

// Route to edit property
router.post("/edit-property/:id", editProperty);

// get all properties
router.get("/all", verifyToken, allProperty);

// get property by id 

router.get("/getpropertybyid/:id",getPropertyById);

module.exports = router;
