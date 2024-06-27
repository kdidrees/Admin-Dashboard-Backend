const express = require("express");
const { createProperty } = require("../controllers/createProperty");
const upload = require("../middlewares/upload");
const verifyToken = require("../middlewares/jwtMiddleware");

const router = express.Router();

// Route for creating new listing
router.post("/create-property", verifyToken, upload, createProperty);

module.exports = router;
