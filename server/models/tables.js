import { Client } from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
/* eslint linebreak-style: 0 */

dotenv.config();

const clientString = new Client({
  connectionString: process.env.DATABASE_URL,
});

clientString.connect();

const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
const userPassword = bcrypt.hashSync(process.env.USER_PASSWORD, 10);

const createTable = () => {
  const query = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS menu CASCADE;
  DROP TABLE IF EXISTS orders CASCADE;
  DROP TYPE IF EXISTS user_role CASCADE;
  CREATE TYPE user_role as ENUM ('admin','user');
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR (100) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL,
    address VARCHAR (255) NOT NULL,
    role user_role DEFAULT 'user' ,
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
    quantity int NOT NULL,
    status VARCHAR (100) NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE

  );
  INSERT INTO users (
    user_name,
    email,
    password,
    address,
    role
  )
  VALUES (
    'Andela',
    'andela@gmail.com',
    '${adminPassword}',
    'Epic Tower',
    'admin'
  ); 

  INSERT INTO users (
    user_name,
    email,
    password,
    address,
    role
  )
  VALUES (
    'Oluwakunle Fakorede',
    'oluwakunle@gmail.com',
    '${userPassword}',
    'Ikotun Lagos',
    'user'
  ); 

  INSERT INTO menu (
    menu_name,
    menu_price,
    menu_image
  )
  VALUES (
    'Fried Plantain',
    2000,
    'https://res.cloudinary.com/dotmiu2lg/image/upload/v1547591900/frice.jpg'
  );

  INSERT INTO menu (
    menu_name,
    menu_price,
    menu_image
  )
  VALUES (
    'chopped Fish',
    1500,
    'https://res.cloudinary.com/dotmiu2lg/image/upload/v1547593537/images.jpg'
  );

  INSERT INTO menu (
    menu_name,
    menu_price,
    menu_image
  )
  VALUES (
    'Potato Beans',
    2500,
    'https://res.cloudinary.com/dotmiu2lg/image/upload/v1547592221/crockpot-beans-500x500-kalynskitchen.jpg'
  );

  INSERT INTO menu (
    menu_name,
    menu_price,
    menu_image
  )
  VALUES (
    'Ofada Rice',
    3500,
    'https://res.cloudinary.com/dotmiu2lg/image/upload/v1547592113/ofada.jpg'
  );

  INSERT INTO menu (
    menu_name,
    menu_price,
    menu_image
  )
  VALUES (
    'Bannana Meal',
    4500,
    'https://res.cloudinary.com/dotmiu2lg/image/upload/v1547592282/Peanut-Butter-Banana-Chia-Oatmeal-6.jpg'
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
