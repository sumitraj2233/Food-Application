const express = require("express");
const authrouter = require("./routes/handler");
const Resturantrouter = require("./routes/ResturantRoutes");
const dishrouter = require("./routes/dishRoutes");
const cartrouter = require("./routes/CartRoutes");
const customerrouter = require("./routes/customerRoutes");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
const product = require("./product");
const auth = require("./middleware/authentication");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/products", (req, res) => {
  res.send(product);
});
const port = process.env.PORT || 5000;
app.use("/", authrouter);
app.use("/", auth, Resturantrouter);
app.use("/dish", auth, dishrouter);
app.use("/cart", auth, cartrouter);
app.use("/customer", auth, customerrouter);
app.use("/api/orders", require("./routes/orderRoutes"));
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
