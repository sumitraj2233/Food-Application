const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "order name required"],
  },
  email: {
    type: String,
    required: [true, " email required"],
  },
  userId: {
    type: String,
    required: [true, " userId required"],
  },
  orderitems: [],
  shippingAddress: {
    type: String,
    required: [true, " shippingAddress required"],
  },
  orderAmount: {
    type: String,
  },
});
module.exports = mongoose.model("order", orderSchema);
