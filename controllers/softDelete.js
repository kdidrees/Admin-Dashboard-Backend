const PropertyModel = require("../models/propertyModel");

exports.deletePropertyById = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await PropertyModel.findById(id);

    if (!property) {
      return res.status(404).json({ message: "property not found" });
    }

    // perform soft delete by updating the property

    property.deleted = true;
    await property.save();

    res
      .status(200)
      .json({ id: property._id, message: "property deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
