import jwt from 'jsonwebtoken';

/* eslint linebreak-style: 0 */
const adminController = {
  loginAdmin(req, res) {
    const { email, password } = req.body;
    const adminPayload = {
      email: 'andela@food.com',
      password: 'andela2018',
    };
    if (email === adminPayload.email && password === adminPayload.password) {
      const token = jwt.sign(adminPayload, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.status(200).json({
        status: 'Success',
        message: 'Admin logged in successfully',
        token,
      });
      res.status(401).json({
        status: 'Error',
        message: 'Invalid credentials',
      });
    }
  },
};

export default adminController;
