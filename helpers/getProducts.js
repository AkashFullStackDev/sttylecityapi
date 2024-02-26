const db = require("../models/index");

const getProducts = async (req, res) => {
  const {page, limit, name} = req.query;
  
  const skip = (page - 1) * limit;
  const queryName = {$regex: name, $options: "i"}
  console.log(queryName)

    try {
      const products = await db.Products.find(name?{name: queryName}:{}).skip(skip).limit(limit);
  
      if (products) {
        console.log("Data sent successfully!");
        res.status(200).json(products);
      } else {
        console.log("Data not found!");
        res.status(500).json({ msg: "Data not found!" });
      }
    } catch(err) {
      console.log(`Database find error! ${err}`);
      res.status(500).json({ msg: "Database find error!" });
    }
  }

  module.exports = getProducts;