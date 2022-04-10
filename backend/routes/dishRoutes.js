const express = require("express");
const router = express.Router();
const dishController = require("../controllers/dishController");

router.get("/", dishController.getAllDishes);

router.post("/", dishController.createDishes);

module.exports = router;
