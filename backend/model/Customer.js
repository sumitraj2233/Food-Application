const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name "],
  },
  orders: {
    type: String,
    required: [true, "Please enter the orders"],
  },
  customer: {
    type: String,
    required: [true, "Please enter the customer"],
  },
});

module.exports = mongoose.model("Customer", customerSchema);
