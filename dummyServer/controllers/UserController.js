import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../dummyModels/UserModels';


/**
 *
 *@class UsersController
 *@classdesc creates an UsersController Class
 */

class UsersController {
  /**
   * @description - Gets all orders
   * @param  {Object} req - request
   * @param  {object} res - response
   * @return {object} - status code and  message
   */
  static getAllUsers(req, res) {
    if (!Users) {
      return res.status(400).send({
        message: 'No user found',
      });
    }
    return res.status(200).send({
      status: 'Success',
      Users,
    });
  }

  /**
   * create a new user
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message when a user is registered
   */
  static createUser(req, res) {
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
    const token = jwt.sign(newUser, process.env.pass, { expiresIn: '1hr' });
    // Success message
    return res.status(201).json({
      message: 'you have successfully Registered this user',
      token,
    });
  }

  /**
   * @description - Logs a user in
   * @param  {Object} req - request
   * @param  {object} res - response
   * @return {object} - status code and  message
   */

  static loginUser(req, res) {
    const { userName, password } = req.body;
    for (let i = 0; i < Users.length; i += 1) {
      if (userName === Users[i].userName) {
        if (password !== Users[i].password) {
          return res.status(403).json({
            message: 'password provided does not match username',
          });
        }
        const valueName = Users[i];

        // Assign token for logged in user for 1 hour
        const token = jwt.sign(valueName, process.env.pass, { expiresIn: '1hr' });
        // Succeess message
        return res.status(200).json({
          message: 'logged in successfully...',
          token,
        });
      }
    }
    return res.status(401).json({
      message: 'invalid credentials',
    });
  }
}

export default UsersController;
