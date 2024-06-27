const PropertyModel = require("../models/propertiyModel");

exports.editProperty = async (req, res) => {
  const { id } = req.params.id;

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
    description,
  } = req.body;

  const images = req.files.map((file) => file.path);

  try {
    const property = await PropertyModel.findById(id);

    if (!property) {
      return res.status(404).json({ error: "property not found" });
    }

    // update property fields
    property.price = price;
    property.bedrooms = bedrooms;
    property.bathrooms = bathrooms;
    property.area = area;
    property.lotSize = lotSize;
    property.address = address;
    property.propertyType = propertyType;
    property.daysOnRealtor = daysOnRealtor;
    property.pricePerSqft = pricePerSqft;
    property.yearBuilt = yearBuilt;
    property.garage = garage;
    property.description = description;

    if (images.length > 0) {
      property.images = images;
    }

    const updatedProperty = await property.save();
    res.json({
      property: updatedProperty,
      msg: "property updated successfully",
    });
  } catch (err) {
    console.log('error updating property',err );
    res.status(500)
  }
};
