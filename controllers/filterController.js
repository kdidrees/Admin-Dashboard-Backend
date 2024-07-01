const PropertyModel = require("../models/propertyModel");

// Filter properties

exports.FilterProperties = async (req, res) => {
  try {
    const {
      minPrice,
      maxPrice,
      propertyType,
      minBedrooms,
      maxBedrooms,
      minBathrooms,
      maxBathrooms,
    } = req.query;

    // Build the query object

    let query = {};
    if (minPrice) {
      query.price = { $gte: minPrice };
    }
    if (maxPrice) {
      query.price = query.price
        ? { ...query.price, $lte: maxPrice }
        : { $lte: maxPrice };
    }
    if (propertyType) {
      query.propertyType = propertyType;
    }

    if (minBedrooms) {
      query.bedrooms = { $gte: minBedrooms };
    }

    if (maxBedrooms) {
      query.bedrooms = query.bedrooms
        ? { ...query.bedrooms, $lte: maxBedrooms }
        : { $lte: maxBedrooms };
    }

    if (minBathrooms) {
      query.bathrooms = { $gte: minBathrooms };
    }

    if (maxBathrooms) {
      query.bathrooms = query.bathrooms
        ? { ...query.bathrooms, $lte: maxBathrooms }
        : { $lte: maxBathrooms };
    }

    // fetch filtered properties from database

    const properties = await PropertyModel.find(query);

    return res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "error fetching properties", error });
  }
};
