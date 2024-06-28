const propertyModel = require("../models/propertyModel");

exports.allProperty = async (req, res) => {
  try {
    const properties = await propertyModel.find();

    res.status(200).json(properties);
  } catch (err) {
    console.log("err fetching properties", err);
    res
      .status(500)
      .json({ error: "an error occured while fething properties" });
  }
};
