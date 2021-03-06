import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/database';

/* eslint linebreak-style: 0 */
const UsersController = {

  /**
   * create a new user
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message when a user is registered
   */
  userSignup(req, res) {
    const findQuery = 'SELECT * FROM users WHERE email = $1';
    const params = [req.body.email];
    db.query(findQuery, params)
      .then((user) => {
        if (user.rows[0]) {
          res.status(409).json({
            status: 'Error',
            message: 'User already exist',
          });
        }
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const insertQuery = 'INSERT INTO users(user_name, email, password, address, role) VALUES($1, $2, $3, $4, $5) returning *';
        const values = [
          req.body.user_name,
          req.body.email,
          hashedPassword,
          req.body.address,
          'user',
        ];
        db.query(insertQuery, values)
          .then((users) => {
            const newUser = {
              id: users.rows[0].id,
              username: users.rows[0].user_name,
              role: users.rows[0].role,
            };
            const token = jwt.sign(newUser, process.env.SECRET_KEY, { expiresIn: '1hr' });
            res.status(201).json({
              status: 'Success',
              message: 'User registered successfully',
              user: users.rows[0].user_name,
              token,
              id: users.rows[0].id,
            });
          })
          .catch((err) => {
            res.status(400).json({
              status: 'Error',
              message: 'Fail to register user',
              err,
            });
          });
      })
      .catch((err) => {
        res.status(500).json({
          status: 'Error',
          message: 'Could not complete request at this time',
          err,
        });
      });
  },

  /**
   * @description - Logs a user in
   * @param  {Object} req - request
   * @param  {object} res - response
   * @return {object} - status code and  message
   */

  userLogin(req, res) {
    const selectQuery = 'SELECT * FROM users WHERE email = $1';
    const params = [req.body.email];
    return db.query(selectQuery, params)
      .then((users) => {
        if (!users.rows[0]) {
          return res.status(401).json({
            status: 'Error',
            message: 'Incorrect username or password',
          });
        }
        const comparedpassword = bcrypt.compareSync(req.body.password, users.rows[0].password);
        if (!comparedpassword) {
          return res.status(401).json({
            status: 'Error',
            message: 'Incorrect username or password',
          });
        }
        const valueName = {
          id: users.rows[0].id,
          username: users.rows[0].user_name,
          role: users.rows[0].role,
        };
        const token = jwt.sign(valueName, process.env.SECRET_KEY, { expiresIn: '1hr' });
        return res.status(200).json({
          status: 'Success',
          message: 'User logged in successfully',
          token,
          role: users.rows[0].role,
          id: users.rows[0].id,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 'Error',
          message: 'Could not complete request at this time',
          err,
        });
      });
  },
};

export default UsersController;
