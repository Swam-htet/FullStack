const http = require("http");

// controller import
const productController = require("./contoller/productController");

const port = 400;

const { products } = require("./data/data");

const server = http.createServer((req, res) => {
  // get all product
  if (req.url === "/api/products" && req.method === "GET") {
    productController.getProducts(req, res);
  }

  // get product by id
  else if (req.url.match(/\/api\/products\/\w+/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    productController.getProductById(req, res, id);
  }

  // create product
  else if (req.url === "/api/products" && req.method === "POST") {
    productController.createProduct(req, res);
  }

  // final 404 status
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(
      JSON.stringify({
        message: "Route not found",
      })
    );
    res.end();
  }
});
server.listen(port, () => console.log("server is started at port " + port));
