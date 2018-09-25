import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Admin from '../dummyModels/AdminModel';


dotenv.config();


const AdminController = {
  /**
   *@description - Gets all Admin
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  getAllAdmin(req, res) {
    if (!Admin) {
      return res.status(400).json({
        message: 'No Admin found',
      });
    }
    return res.status(200).json({
      status: 'Success',
      Admin,
    });
  },

  /**
   *@description - Logs admin in
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  loginAdmin(req, res) {
    const { userName, password } = req.body;
    for (let i = 0; i < Admin.length; i += 1) {
      if (userName === Admin[i].userName && (password === Admin[i].password)) {
        const valueName = Admin[i];
        // Assign token for Admin for 6 hours
        const token = jwt.sign(valueName, process.env.PASS, { expiresIn: '6hr' });
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

export default AdminController;
