import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const clientString = new Client({
  connectionString: process.env.DATABASE_URL,
});

clientString.connect();

// const adminPasswrd = bcrypt.hashSync('andelaA_must', 10);

const createTable = () => {
  const query = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS menu CASCADE;
  DROP TABLE IF EXISTS orders CASCADE;
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR (100) UNIQUE NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL,
    address VARCHAR (255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

  );
  CREATE TABLE IF NOT EXISTS menu (
    menu_id SERIAL PRIMARY KEY,
    menu_name VARCHAR (100) UNIQUE NOT NULL,
    menu_price int NOT NULL,
    menu_image VARCHAR (255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

  );
  CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    food_name VARCHAR (100) UNIQUE NOT NULL,
    food_price int NOT NULL,
    status VARCHAR (100) NOT NULL,
    user_id INT NOT NULL,
    food_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (food_id) REFERENCES menu (menu_id) ON DELETE CASCADE

  );
  `;
  clientString.query(query)
    .then((res) => {
      console.log(res);
      clientString.end();
    })
    .catch((err) => {
      console.log(err);
      clientString.end();
    });
};

createTable();
