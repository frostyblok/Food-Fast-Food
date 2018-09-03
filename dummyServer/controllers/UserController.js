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

  /**
   * @description - Logs a user in
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   * @memberOf UserController
   *
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
        const valueName = Users[i].userName;
        return res.status(200).json({
          message: `logged in successfully...Welcome, ${valueName}`,
        });
      }
    }
    return res.status(401).json({
      message: 'invalid credentials',
    });
  }
}

export default UsersController;
