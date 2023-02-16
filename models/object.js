const mongoose = require("mongoose");

const ObjectSchema = new mongoose.Schema({
  product_name: { type: String, required: true, min: 3, max: 255 },
  product_image: { data: Buffer, contentType: String },
  product_description: { type: String, required: true, min: 3, max: 255 },
  product_price: { type: String, required: true, min: 1, max: 255 },
});

module.exports = mongoose.model("products", ObjectSchema);
