const PropertyModel = require("../models/propertyModel");

// Filter properties

exports.FilterProperties = async (req, res) => {
  try {
    const { minPrice, maxPrice, propertyType } = req.query;

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

    // fetch filtered properties from database

    const properties = await PropertyModel.find(query);

    return res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "error fetching properties", error });
  }
};
