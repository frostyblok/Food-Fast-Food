import { Pool } from 'pg';
import dotenv from 'dotenv';

/* eslint linebreak-style: 0 */

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const database = {
  query(queryText, params) {
    return new Promise((resolve, reject) => {
      pool.query(queryText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};


export default database;
