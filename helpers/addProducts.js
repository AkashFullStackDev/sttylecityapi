const db = require("../models/index");

const addProducts = (req, res) => {
  db.Products.create(Products)
    .then((products) => {
      console.log(products);
      res.status(200).json({ products_array: products });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ Err: "Data not inserted!" });
    });
};

module.exports = addProducts;
