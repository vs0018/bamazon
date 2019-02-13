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

    buyItem();
};

function buyItem() {

    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        
        console.log (results);
        
    inquirer
    .prompt([
    {
        name: "choice",
        type: "rawlist",
        choices: function(results) {
        var choiceArray = [];
        for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name);
        }
        return choiceArray;
        },
        message: "What would you like to buy?"
    },
    {
        name: "buy",
        type: "input",
        message: "How many units would you like to buy?"
    }
    ])
    .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
            }
        }

        // determine if there is enough stock to fulfill order
        if (chosenItem.stock_quantity < parseInt(answer.buy)) {
        
            // stock high enough, so update db, let the user know, and start over
            connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                stock_quantity: chosenItem.stock_quantity - answer.buy
                },
                {
                id: chosenItem.id
                }
            ],
            function(error) {
                if (error) throw err;
                console.log("Order placed successfully!");
                start();
            }
            );
        }
        else {
            // stock wasn't high enough, so apologize and start over
            console.log("Sorry, not enough stock to fulfill your order. Please try again...");
            start();
        }
        });
    });



};