const Cart = require("../model/Cart");
exports.createCart = async (req, res) => {
  try {
    const { name } = req.user;
    const item = await Cart.create(req.body);
    res.status(200).json({ item, name });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
exports.getAllCart = async (req, res) => {
  try {
    const { name } = req.user;

    const items = await Cart.find();
    res.status(200).json({ data: { items, name } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
