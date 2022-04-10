const Product = require("../model/Resturant");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const results = await Product.find();
    //   console.log(results);
    res.status(200).json({ results });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
const deleteProduct = async (req, res) => {
  const {
    params: { id: id },
  } = req;
  const product = await Product.findByIdAndRemove({ _id: id });
  res.status(200).send({ success: true });
};

module.exports = { createProduct, getAllProducts, deleteProduct };
