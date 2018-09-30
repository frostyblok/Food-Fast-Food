import { Client } from 'pg';
import dotenv from 'dotenv';
/* eslint linebreak-style: 0 */

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
    id SERIAL PRIMARY KEY,
    menu_name VARCHAR (100) UNIQUE NOT NULL,
    menu_price int NOT NULL,
    menu_image VARCHAR (255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

  );
  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    food_name VARCHAR (100) NOT NULL,
    food_price int NOT NULL,
    status VARCHAR (100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

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
