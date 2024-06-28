// controllers/propertyController.js

const PropertyModel = require("../models/propertyModel");
const path = require("path");
const fs = require("fs");

exports.createProperty = async (req, res) => {
  const {
    price,
    bedrooms,
    bathrooms,
    area,
    lotSize,
    address,
    propertyType,
    daysOnRealtor,
    pricePerSqft,
    yearBuilt,
    garage,
    description
  } = req.body;

  try {
    // Process file uploads
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => file.path);
    }

    const newProperty = new PropertyModel({
      price,
      bedrooms,
      bathrooms,
      area,
      lotSize,
      address,
      propertyType,
      daysOnRealtor,
      pricePerSqft,
      yearBuilt,
      garage,
      description,
      images,
    });

    const property = await newProperty.save();
    res.status(201).json({ property, msg: "success" });
  } catch (err) {
    console.error("Error creating property:", err);
    res.status(500).json({ error: "Server error" });
  }
};
