const axios = require("axios");
const Dish = require("../model/Dish");

exports.createDishes = async (req, res) => {
  const dishes = await Dish.create(req.body);
  res.status(200).json({ dishes });
};
exports.getAllDishes = async (req, res) => {
  try {
    const { name } = req.user;

    const dishes = await Dish.find();
    res.status(200).json({ status: "success", data: { dishes, name } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "error", msg: err.message });
  }
};
