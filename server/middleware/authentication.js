import jwt from 'jsonwebtoken';

/* eslint linebreak-style: 0 */
const authentication = (req, res, next) => {
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          status: 'Error',
          message: 'Authentication failed',
        });
      }
      req.decoded = decoded;
      return next();
    });
  } else {
    return res.status(401).send({
      message: 'Unauthorized Access! You are not allowed to access this page.',
    });
  }
};

export default authentication;
