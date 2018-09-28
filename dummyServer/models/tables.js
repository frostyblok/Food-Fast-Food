import { Client } from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const clientString = new Client({
  connectionString: process.env.DATABASE_URL,
});

clientString.connect();

// const adminPasswrd = bcrypt.hashSync('andelaA_must', 10);

const createTable = () => {
  const query = `
  CREATE TABLE IF NOT EXISTS users (
   
    userId SERIAL PRIMARY KEY,

    username VARCHAR (100) NOT NULL,

    email VARCHAR (255) UNIQUE NOT NULL,

    password VARCHAR (100) NOT NULL,

    address VARCHAR (255) NOT NULL,

    role user_role DEFAULT 'user' ,
    
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

  );
  CREATE TABLE IF NOT EXISTS menu (
   
    foodId SERIAL PRIMARY KEY,

    foodName VARCHAR (100) NOT NULL,

    foodPrice VARCHAR (255) UNIQUE NOT NULL,

    foodImage VARCHAR (255) NOT NULL,
    
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

  );
  CREATE TABLE IF NOT EXISTS orders (
   
    orderId SERIAL PRIMARY KEY,

    foodName VARCHAR (100) NOT NULL,

    foodPrice VARCHAR (255) UNIQUE NOT NULL,

    userId VARCHAR (255) NOT NULL,

    address VARCHAR (100) NOT NULL,
    
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

  );
  `;

  clientString.query(query, (err, done) => {
    if (err) {
      console.log(err);
      clientString.end();
    }
    console.log(done);
    clientString.end();
  });
};
