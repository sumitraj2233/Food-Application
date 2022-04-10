const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the dish"],
  },
  location: {
    type: String,
    required: [true, "Please enter the address of the restaurant"],
  },
  cuisine: {
    type: String,
    default: "Multi-Cuisine",
  },
  opensAt: {
    type: String,
    required: [true, "Please provide description about the dish"],
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
