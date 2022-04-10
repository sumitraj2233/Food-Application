const express = require("express");

const router = express.Router();
const {
  createProduct,
  getAllProducts,
  deleteProduct,
} = require("../controllers/ResturantController");

router.route("/createResturant").post(createProduct);
router.route("/getAllResturants").get(getAllProducts);
router.route("/deleteResturant/:id").delete(deleteProduct);
module.exports = router;
