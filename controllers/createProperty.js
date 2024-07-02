// controllers/propertyController.js

const PropertyModel = require("../models/propertyModel");
const path = require("path");
const  axios  = require("axios");


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


   // Function to fetch latitude and longitude from Google Maps Geocoding API
  //  const fetchCoordinates = async (address) => {
  //   try {
  //     const response = await axios.get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&${process.env.GOOGLE_MAPS_API_KEY}`
  //     );
  //     const { results } = response.data;
  //     if (results && results.length > 0) {
  //       const { geometry } = results[0];
  //       const { location } = geometry;
  //       return { latitude: location.lat, longitude: location.lng };
  //     } else {
  //       throw new Error(`Geocoding API error: ${response.data.status}`);
  //     }
  //   } catch (error) {
  //     throw new Error(`Error fetching coordinates: ${error.message}`);
  //   }
  // };

  //  fetch coordinates for the provided address
  // const { latitude, longitude } = await fetchCoordinates(address);

  // console.log(latitude,longitude,'both coordinates kd')

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
