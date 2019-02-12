require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.SQL_PASS,
    database: "bamazon"
  });
  
connection.connect(function(err) {
    if (err) throw err;

    readItems();
});

function readItems() {
    console.log("Selecting all items...\n");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
    
        console.log(res);
        connection.end();
    });
}