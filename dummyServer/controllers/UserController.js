import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Users from '../dummyModels/UserModels';

dotenv.config();

const UsersController = {
  /**
   * @description - Gets all orders
   * @param  {Object} req - request
   * @param  {object} res - response
   * @return {object} - status code and  message
   */
  getAllUsers(req, res) {
    if (Users) {
      return res.status(200).send({
        status: 'Success',
        Users,
      });
    }
    return res.status(400).send({
      message: 'No user found',
    });
  },

  /**
   * create a new user
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message when a user is registered
   */
  createUser(req, res) {
    const {
      userName, email, password, address,
    } = req.body;
    const newUser = {
      id: Users.length + 1,
      userName,
      email,
      password: bcrypt.hashSync(password, 10),
      address,
    };
    Users.push(newUser);

    // Assign token for new user for 1 hour
    const token = jwt.sign(newUser, process.env.PASS, { expiresIn: '1hr' });
    return res.status(201).json({
      message: 'you have successfully Registered this user',
      token,
    });
  },

  /**
   * @description - Logs a user in
   * @param  {Object} req - request
   * @param  {object} res - response
   * @return {object} - status code and  message
   */

  loginUser(req, res) {
    const { userName, password } = req.body;
    for (let i = 0; i < Users.length; i += 1) {
      if (userName === Users[i].userName && (password === Users[i].password)) {
        const valueName = Users[i];
        // Assign token for logged in user for 1 hour
        const token = jwt.sign(valueName, process.env.PASS, { expiresIn: '1hr' });
        return res.status(200).json({
          message: 'logged in successfully...',
          token,
        });
      }
    }
    return res.status(401).json({
      message: 'Username or Password is incorrect',
    });
  },
};

export default UsersController;
