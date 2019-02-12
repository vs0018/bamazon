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

    start();

});

function start() {

    connection.query("SELECT * FROM products", function(err, response) {
        if (err) throw err;

        else {
            for (var i = 0; i < response.length; i++) {
                console.log("\nID: " + response[i].id);
                console.log("Product: " + response[i].product_name);
                console.log("Department: " + response[i].department_name);
                console.log("Price: " + response[i].price);
                console.log("------------------------");
            };
        };

    });
};