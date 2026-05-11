CREATE TABLE users (

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL

);


CREATE TABLE drugs (

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100) NOT NULL,

    strength VARCHAR(50)

);


CREATE TABLE pharmacies (

    id INT PRIMARY KEY AUTO_INCREMENT,

    name VARCHAR(100) NOT NULL,

    location VARCHAR(100),

    contact VARCHAR(20)

);


CREATE TABLE inventory (

    id INT PRIMARY KEY AUTO_INCREMENT,

    pharmacy_id INT,

    drug_id INT,

    quantity INT,

    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (pharmacy_id) REFERENCES pharmacies(id),

    FOREIGN KEY (drug_id) REFERENCES drugs(id)

);


CREATE TABLE waitlist (

    id INT PRIMARY KEY AUTO_INCREMENT,

    user_id INT,

    drug_id INT,

    FOREIGN KEY (user_id) REFERENCES users(id),

    FOREIGN KEY (drug_id) REFERENCES drugs(id)

);