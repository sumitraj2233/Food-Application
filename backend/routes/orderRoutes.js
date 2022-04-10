const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

const stripe = require("stripe")(
  "sk_test_51JzvY4SCCsOIrfVGHd6S3zBRBx6Hl4VLhfB4qLUoZGpGZr7CnbFmG9zTooH3wvNXx6VmEspAZfmWUurcHzRb2xas005DhjKCDe"
);

router.post("/placeOrder", async (req, res) => {
  const { token, totalPrice, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: totalPrice * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      res.send("payment successs");
    } else {
      res.send("payment failed");
    }
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});
module.exports = router;
