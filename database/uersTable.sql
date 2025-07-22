-- users_table.sql

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- or INT AUTO_INCREMENT for MySQL
    name VARCHAR(60) NOT NULL CHECK (CHAR_LENGTH(name) BETWEEN 20 AND 60),
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    password VARCHAR(255) NOT NULL CHECK (
        CHAR_LENGTH(password) BETWEEN 8 AND 16
        AND password ~* '.*[A-Z].*'         -- At least 1 uppercase
        AND password ~* '.*[\W_].*'         -- At least 1 special character
    ),
    address VARCHAR(400) NOT NULL CHECK (CHAR_LENGTH(address) <= 400),
    role ENUM('System Admin', 'Normal User', 'Store Owner') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
