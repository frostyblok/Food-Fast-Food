import bcrypt from 'bcrypt';
import Users from '../dummyModels/UserModels';

/**
 *
 *@class UsersController
 *@classdesc creates an UsersController Class
 */

class UsersController {
  /**
   * @description - Gets all orders
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   *
   * @return {object} - status code and  message
   */
  static getAllUsers(req, res) {
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
      userName, email, password,
    } = req.body;
    const newUser = {
      id: Users.length + 1,
      userName,
      email,
      password: bcrypt.hashSync(password, 10),
    };
    Users.push(newUser);
    return res.status(201).json({
      message: 'you have successfully Registered this user',
      newUser: Users[Users.length - 1],
    });
  }
}

export default UsersController;
