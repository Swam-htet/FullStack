const mysql = require("mysql2");

// Create a connection pool
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "alphar132212",
    database: "retailDB",
    port: 3306,
    connectionLimit: 10, // Optional: The maximum number of connections in the pool
});

module.exports={
    connection
}