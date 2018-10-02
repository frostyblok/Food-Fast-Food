export default (req, res, next) => {
  const decodedId = parseInt(req.decoded.id, 10);
  const paramsId = parseInt(req.params.id, 10);
  if (decodedId === paramsId) {
    return next();
  }
  return res.status(403).json({
    status: 'Error',
    message: 'You are not allowed to view this page',
  });
};
