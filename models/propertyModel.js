const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  lotSize: {
    type: Number,
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
  description: {
    type: String,
  },
  images: {
    type: [String],
    default: [],
  },
});

const PropertyModel = mongoose.model("properties", propertySchema);

module.exports = PropertyModel;
