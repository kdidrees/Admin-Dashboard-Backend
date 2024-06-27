const PropertyModel = require("../models/propertiyModel");


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
    images,
  } = req.body;

  try {
    const newProperty = new PropertyModel({
      images,
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
    });

    const property = await newProperty.save();
    res.status(201).json({property,msg:"property create successfully"});
  } catch (err) {
    console.error("Error creating property:", err);
    res.status(500).json({ error: "Server error" });
  }
};
