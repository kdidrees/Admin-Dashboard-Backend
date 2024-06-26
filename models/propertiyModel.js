const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  images: {
    type: [String],
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  lotSize: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  daysOnRealtor: {
    type: Number,
    required: true,
  },
  pricePerSqft: {
    type: Number,
    required: true,
  },
  yearBuilt: {
    type: Number,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
    default: 0,
  },
});

const PropertyModel = mongoose.model("Properties", propertySchema);

module.exports = PropertyModel;
