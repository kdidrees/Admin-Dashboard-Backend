const propertyModel = require("../models/propertyModel");

exports.getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await propertyModel.findById(id);

    if (!property) {
      return res.status(404).json({ error: "property not found" });
    }

    res.status(200).json(property);
  } catch (err) {
    console.log("err fetching property", err);
    res.status(500).json({ error: "an error occured while fething property" });
  }
};
