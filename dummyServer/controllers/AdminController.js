// import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../dummyModels/AdminModel';

// const pass = 'successful';
/**
 *
 *@class AdminController
 *@classdesc creates an AdminController Class
 */

class AdminController {
  /**
   * @description - Gets all Admin
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   *
   * @return {object} - status code and  message
   */
  static getAllAdmin(req, res) {
    if (!Admin) {
      return res.status(400).send({
        message: 'No Admin found',
      });
    }
    return res.status(200).send({
      status: 'Success',
      Admin,
    });
  }

  /**
   * @description - Logs admin in
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   * @memberOf AdminController
   *
   * @return {object} - status code and  message
   */
  static loginAdmin(req, res) {
    const { userName, password } = req.body;
    for (let i = 0; i < Admin.length; i += 1) {
      if (userName === Admin[i].userName) {
        if (password !== Admin[i].password) {
          return res.status(403).json({
            message: 'password provided does not match username',
          });
        }
        const valueName = Admin[i];
        // Assign token for Admin for 6 hours
        const token = jwt.sign(valueName, process.env.pass, { expiresIn: '6hr' });
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

export default AdminController;
