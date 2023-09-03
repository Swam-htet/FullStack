// product data
const { products } = require("../data/data");

// get all model
function getAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

// get by id
function getByID(id) {
  return new Promise((resolve, reject) => {
    let result = products.find((product) => product.id == id);
    resolve(result);
  });
}

function Create(product) {
    
}

// export
module.exports = {
  getAll,
  getByID,
  Create,
};
