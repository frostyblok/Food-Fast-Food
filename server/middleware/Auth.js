/* eslint linebreak-style: 0 */
import jwt from 'jsonwebtoken';

const Secure = {
  authentication(req, res, next) {
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
      return res.status(403).send({
        message: 'Unauthorized Access! You are not allowed to access this page.',
      });
    }
  },
  userAthentication(req, res, next) {
    const decodedId = parseInt(req.decoded.id, 10);
    const paramsId = parseInt(req.params.id, 10);
    if (decodedId === paramsId) {
      return next();
    }
    return res.status(403).json({
      status: 'Error',
      message: 'You are not allowed to view this page',
    });
  },
  adminAuthentication(req, res, next) {
    if (req.decoded.role !== 'admin') {
      return res.status(403).json({
        status: 'Error',
        message: 'You are not allowed to access the route',
      });
    }
    return next();
  },
};

export default Secure;
