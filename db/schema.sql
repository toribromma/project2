DROP DATABASE IF EXISTS rentaldb;
CREATE DATABASE rentaldb;
USE rentaldb;

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    propertyId INT,
    createdAt TIMESTAMP DEFAULT '0000-00-00 00:00:00',
    updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE properties(
    id INT AUTO_INCREMENT NOT NULL,
    theState VARCHAR(255) NOT NULL,
    theAddress VARCHAR(255) NOT NULL,
    starred BOOLEAN NOT NULL,
    purchased BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM rentaldb.users;
SELECT * FROM rentaldb.properties;

-- Trying to select all purchased properties with this call below
SELECT purchased
FROM rentaldb.users
LEFT JOIN rentaldb.properties ON rentaldb.users.propertyId = rentaldb.properties.id;
