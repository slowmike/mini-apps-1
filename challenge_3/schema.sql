DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE checkoutData (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  email VARCHAR(50),
  password VARCHAR(20),
  addressline1 VARCHAR(30),
  addressline2 VARCHAR(30),
  city VARCHAR(20),
  state VARCHAR(20),
  postal INT,
  phone INT,
  ccn INT,
  cvv INT,
  billing INT,
  PRIMARY KEY (id)
);
