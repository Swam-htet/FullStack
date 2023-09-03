let {connection} = require("./../config/connection");

let tbName = "product";

// get all product service
async function getAllProduct() {
    let products = [];
    let query = "SELECT * FROM " + tbName;

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log("Get all products service");
        products = results;
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return products;
}

// get product by id service
async function getProductByID(id) {
    let products = [];
    let query = `SELECT * FROM ${tbName} where product_id = ${id}`;

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        products = results;
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return products;
}

// create product service
async function createProduct(data){
    let query = `INSERT INTO ${tbName} 
                (product_name,
                product_price,
                product_manufacture_date,
                product_exp_date,
                product_quantity,
                manufacturer_id,
                category_id)
                VALUES("${data.name}",
                ${data.price},"${data.manuDate}",
                "${data.expDate}",${data.quantity},
                ${data.manuID},${data.cateID})`;

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log("Create new product");
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return {message:"New product is added",error:""};

}


// update product by id service
async function updateProductById(id,data){

    let query = `UPDATE ${tbName} 
                SET 
                product_name="${data.name}",product_price=${data.price},
                product_manufacture_date="${data.manuDate}",product_exp_date="${data.expDate}",
                product_quantity=${data.quantity},manufacturer_id=${data.manuID},
                category_id=${data.cateID}
                where product_id=${id}`;

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log("Update product:"+id);
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return {message:`Product:${id} is updated`,error:""};

}


// delete product by id service
async function deleteProductById(id){

    let query = `DELETE FROM ${tbName} WHERE product_id=${id}`;

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log("Delete product:"+id);
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return {message:`Product:${id} is deleted`,error:""};

}

// node module export
module.exports = {
    getAllProduct,
    getProductByID,
    createProduct,
    updateProductById,
    deleteProductById
}