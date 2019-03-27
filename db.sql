DROP DATABASE IF EXISTS store_DB;

CREATE DATABASE store_DB;

USE store_DB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INTEGER(50) NOT NULL,
  quantity INTEGER(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Bread", "Food", 250000, 300);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Chicken", "Food", 300000, 250);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Potato", "Food", 100000, 400);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Cod", "Food", 200000, 150);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Mackerel", "Food", 260000, 100);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Milk", "Food", 150000, 250);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Radio", "Electronics", 5500000, 50);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Phonograph", "Electronics", 7500000, 30);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Chair", "Furniture", 2500000, 330);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Table", "Furniture", 4500000, 210);

INSERT INTO items (name, department_name, price, quantity)
VALUES ("Bed", "Furniture", 5000000, 170);