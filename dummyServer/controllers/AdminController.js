import Admin from '../dummyModels/AdminModel';

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
        const valueName = Admin[i].name;
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

export default AdminController;
