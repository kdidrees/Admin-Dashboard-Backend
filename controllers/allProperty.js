const propertyModel = require("../models/propertyModel");

exports.allProperty = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  
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
  let query = { deleted: false };
  
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

  try {
    const count = await propertyModel.countDocuments(query);
    const properties = await propertyModel
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      properties,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalItems: count
    });
  } catch (err) {
    console.log("Error fetching properties", err);
    res.status(500).json({ error: "An error occurred while fetching properties" });
  }
};
