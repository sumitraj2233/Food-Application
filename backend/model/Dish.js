const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  resturant_id: {
    type: mongoose.Schema.ObjectId,
    ref: "resturants",
  },
  name: {
    type: String,
    required: [true, "Please enter the name of the dish"],
  },
  description: {
    type: String,
    required: [true, "Please provide description about the dish"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the dish"],
  },
  offer: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
