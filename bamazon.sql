DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30),
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Face Wash", "Beauty", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Body Wash", "Beauty", 8, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Plates", "Paper", 12, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Paper", 11, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Milk", "Dairy", 3, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eggs", "Produce", 5, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laundry Detergent", "Home", 12, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread", "Bakery", 2, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Paper", 6, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Light Bulbs", "Home", 5, 5);
