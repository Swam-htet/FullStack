let {connection} = require("./../config/connection");

let tbName = "manufacturer";

// get all product service
async function getAllManufacturer() {
    let manufacturers = [];
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

        console.log("Get all manufacturer service");
        manufacturers = results;
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return manufacturers;
}

// get product by id service
async function getManufacturerById(id) {
    let manufacturers = [];
    let query = `SELECT * FROM ${tbName} where manufacturer_id = ${id}`;

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

        console.log("Get manufacturer by ID service");
        manufacturers = results;
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return products;
}

// create product service
async function createManufacturer(data){
    let query = `INSERT INTO ${tbName} 
                (manufacturer_name,
                manufacturer_address,
                manufacturer_phNo)
                VALUES("${data.name}",
                "${data.address}","${data.phoneNumber}")`;

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

        console.log("Create new manufacturer");
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return {message:"New manufacturer is added",error:""};

}


// update product by id service
async function updateManufacturerById(id,data){

    let query = `UPDATE ${tbName} 
                SET 
                manufacturer_name="${data.name}",manufacturer_address=${data.price},
                manufacturer_phNo="${data.phoneNumber}"`;

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

        console.log("Update Manufacturer:"+id);
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return {message:`Manufacturer:${id} is updated`,error:""};

}


// delete product by id service
async function deleteManufacturerById(id){

    let query = `DELETE FROM ${tbName} WHERE manufacturer_id=${id}`;

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

        console.log("Delete manufacturer :"+id);
    } catch (err) {
        console.error("Error executing SELECT query:", err.message);
    }
    return {message:`Manufacturer:${id} is deleted`,error:""};

}

// node module export
module.exports = {
    getAllManufacturer,
    getManufacturerById,
    createManufacturer,
    updateManufacturerById,
    deleteManufacturerById
}