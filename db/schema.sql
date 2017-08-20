CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INTEGER(20) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY(id)
);