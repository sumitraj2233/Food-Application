const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
  item: {
    type: Number,
    required: [true, "Please enter the item"],
  },
  items: {
    type: Array,
    required: [true, "Please enter the items"],
  },
});

module.exports = mongoose.model("Cart", cartSchema);
