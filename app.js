const express = require("express");
const app = express();
const cors = require("cors");
const updateUser = require("./helpers/updateUser");
const verifyToken = require("./middlewares/verifytoken");
const signup = require("./helpers/signup");
const login = require("./helpers/login");
const getProducts = require("./helpers/getProducts");
const placeOrder = require("./helpers/placeOrder");
const verifyOrder = require("./helpers/verifyOrder");
const addProducts = require("./helpers/addProducts");

const PORT = 8080 || process.env.PORT;
app.use(express.json());
app.use(cors({ origin: "*" }));

// ************** Home Page API ********************

app.get("/", (req, res) => {
  res.send("I am Working...");
});

// ************** Signup API ********************
app.post("/api/signup", signup);

// ************** Login API ********************
app.post("/api/login", login);

// ************** Add Products API ********************
app.get("/api/addproducts", addProducts)

// ******************Getting Products API******************
app.get("/api/products", getProducts);

// *********************Update User Details***************
app.post("/api/updateuser", verifyToken, updateUser);

// ******************** RAZORPAY INTEGRATION ******************************
app.post("/api/order", placeOrder);

// **********************Order Validation ****************
app.post("/api/order/validate", verifyOrder);

// ************** Running the server ********************
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
