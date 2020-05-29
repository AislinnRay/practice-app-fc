CREATE TABLE products (product_id SERIAL PRIMARY KEY, product_name VARCHAR(250), product_price DECIMAL, product_image VARCHAR(250));

INSERT INTO products (product_name, product_price, product_image)
VALUES ('Book', 19.99, 'https://images-na.ssl-images-amazon.com/images/I/31o6m4snULL._SX346_BO1,204,203,200_.jpg');