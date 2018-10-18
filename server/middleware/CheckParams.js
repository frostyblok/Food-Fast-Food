/* eslint linebreak-style: 0 */
const paramsChecker = {
  idChecker: (req, res, next) => {
    const { id } = req.params;
    const validId = /^[0-9]+$/;
    if (id) {
      if (!id.match(validId)) {
        return res.status(400).json({
          status: 'Error',
          message: 'ID can only be a number',
        });
      }
    }
    return next();
  },
};

export default paramsChecker;
