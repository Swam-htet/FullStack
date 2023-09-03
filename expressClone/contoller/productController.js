// prodouct model import
const Product = require("../model/productModel");

// get all product contoller
async function getProducts(req, res) {
  try {
    const products = await Product.getAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// get product by id controller
async function getProductById(req, res, id) {
  try {
    const result = await Product.getByID(id);

    // no result
    if (!result) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    }
    // success
    else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    }
  } catch (error) {
    console.log("Error - ", error);
  }
}

// create product
async function createProduct(req, res) {}

// export
module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
