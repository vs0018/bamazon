require("dotenv").config();

var mysql = require("mysql");

var myPass = require("./pass.js");

var newSQL = new SQL(myPass.pass);

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: newSQL.password,
    database: "bamazon"
  });
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    readItems();
});

function readItems() {
    console.log("Selecting all items...\n");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}