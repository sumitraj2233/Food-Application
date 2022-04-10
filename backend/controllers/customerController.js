const Customer = require("../model/Customer");
exports.createCustomer = async (req, res) => {
  try {
    const { name } = req.user;
    const cust = await Customer.create(req.body);
    res.status(200).json({ cust, name });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
