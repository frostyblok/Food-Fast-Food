/* eslint linebreak-style: 0 */
export default (req, res, next) => {
  if (req.decoded.role !== 'admin') {
    return res.status(403).json({
      status: 'Error',
      message: 'You are not allowed to access the route',
    });
  }
  return next();
};
