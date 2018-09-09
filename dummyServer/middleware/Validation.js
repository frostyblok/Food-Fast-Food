
/**
 * @description - Checks that a user signs up with right details
 * @param  {Object} req - request
 * @param  {object} res - response
 * @param {Object} next - Call back function
 * @return {object} - status code and error message
 */
export const validateSignup = (req, res, next) => {
  const {
    userName,
    email,
    password,
    address,
  } = req.body;
  if (userName.trim() === '' || email.trim() === '' || password.trim() === '' || address.trim() === '') {
    return res.status(400).send({
      message: 'Please fill in all fields',
      error: true,
    });
  }
  if (!email || email.search('.com') === -1 || email.search('@') === -1) {
    return res.status(400).send({
      status: 'Error',
      message: 'Please enter a valid email',
    });
  }
  if (password.trim().length < 6) {
    return res.status(400).send({
      status: 'Error',
      message: 'Password must at least be 6 characters long',
    });
  }
  return next();
};

/**
 * @description - Checks that a user signs in with right details
 * @param  {Object} req - request
 * @param  {object} res - response
 * @param {Object} next - Call back function
 * @return {object} - status code and error message
 */
export const validateSignin = (req, res, next) => {
  const {
    userName,
    password,
  } = req.body;
  if (userName.trim() === '' || password.trim() === '') {
    return res.status(400).send({
      status: 'Error',
      message: 'Please fill in all fields',
    });
  }
  if (password.trim().length < 6) {
    return res.status(400).send({
      status: 'Error',
      message: 'Password must at least be 6 characters long',
    });
  }
  return next();
};

/**
 * @description - Checks that a admin signs up with right details
 * @param  {Object} req - request
 * @param  {object} res - response
 * @param {Object} next - Call back function
 * @return {object} - status code and error message
 */
export const validateAdminSignin = (req, res, next) => {
  const {
    userName,
    password,
  } = req.body;
  if (userName.trim() === '' || password.trim() === '') {
    return res.status(400).send({
      status: 'Error',
      message: 'Please fill in all fields',
    });
  }
  if (password.trim().length < 6) {
    return res.status(400).send({
      status: 'Error',
      message: 'Password must at least be 6 characters long',
    });
  }
  return next();
};
