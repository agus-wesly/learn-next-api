const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "learn_next",
});

// Define the SQL query to create the "users" table
const createTableSQL = `CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL
)`;

// Execute the SQL query
connection.query(createTableSQL, function (err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log("Table created successfully");
  }
});

connection.end();
