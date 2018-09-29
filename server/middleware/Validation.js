/* eslint linebreak-style: 0 */

/**
 * @description - Checks that a user signs up with right details
 * @param  {Object} req - request
 * @param  {object} res - response
 * @param {Object} next - Call back function
 * @return {object} - status code and error message
 */
/* eslint linebreak-style: 0 */

export const validateSignup = (req, res, next) => {
  const {
    userName,
    email,
    password,
    address,
  } = req.body;
  const emailChecker = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (userName.match(/^\s*$/g) || email.match(/^\s*$/g) || password.match(/^\s*$/g) || address.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Please fill in all fields',
    });
  }
  if (!email || !emailChecker.test(email)) {
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
  if (userName.match(/^\s*$/g) || password.match(/^\s*$/g)) {
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
  if (userName.match(/^\s*$/g) || password.match(/^\s*$/g)) {
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

export const validateOrder = (req, res, next) => {
  const {
    orderName,
    amount,
  } = req.body;
  if (orderName.match(/^\s*$/g) || amount.toString().match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'orderName or amount can not be empty',
    });
  }
  return next();
};
