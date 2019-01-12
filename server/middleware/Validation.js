/* eslint linebreak-style: 0 */

/**
 * @description - Checks that a user signs up with right details
 * @param  {Object} req - request
 * @param  {object} res - response
 * @param {Object} next - Call back function
 * @return {object} - status code and error message
 */

export const validateSignup = (req, res, next) => {
  const {
    user_name,
    email,
    password,
    address,
  } = req.body;
  const emailChecker = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; // Source---> https:emailregex.com
  if (user_name.match(/^\s*$/g) && email.match(/^\s*$/g) && password.match(/^\s*$/g) && address.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'All fields are required',
    });
  }
  if (user_name.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Username is required',
    });
  }
  if (email.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Email is required',
    });
  }
  if (password.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Password is required',
    });
  }
  if (address.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'User address is required',
    });
  }
  if (!emailChecker.test(email)) {
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
  if (user_name.length > 15) {
    return res.status(400).send({
      status: 'Error',
      message: 'Username too long',
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
    email,
    password,
  } = req.body;
  

  if (email.match(/^\s*$/g) && password.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Email and password fields are required',
    });
  }
  if (email.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Email is required',
    });
  }
  if (password.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Password is required',
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
    food_name,
    food_price,
    quantity,
  } = req.body;
  if (food_name.match(/^\s*$/g) && food_price.toString().match(/^\s*$/g) && quantity.toString().match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Order name, price, and quantity can not be empty',
    });
  }
  if (food_name.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Order name can not be empty',
    });
  }
  if (food_price.toString().match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Order price can not be empty',
    });
  }
  if (quantity.toString().match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Order quantity can not be empty',
    });
  }
  if (Number.isNaN(Number(food_price))) {
    return res.status(400).json({
      status: 'Error',
      message: 'Invalid price, please enter a valid price',
    });
  }
  if (Number.isNaN(Number(quantity))) {
    return res.status(400).json({
      status: 'Error',
      message: 'Invalid quantity, please enter a valid quantity',
    });
  }
  return next();
};

export const validateMenu = (req, res, next) => {
  const {
    menu_name,
    menu_price,
    menu_image,
  } = req.body;
  if (menu_name.match(/^\s*$/g) && menu_price.toString().match(/^\s*$/g) && menu_image.match(/^\s*$/g)) {
    return res.status(400).json({
      status: 'Error',
      message: 'Menu name, menu price, and menu image can not be empty',
    });
  }
  if (menu_name.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Menu name can not be empty',
    });
  }
  if (menu_price.toString().match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Menu price can not be empty',
    });
  }
  if (menu_image.match(/^\s*$/g)) {
    return res.status(400).send({
      status: 'Error',
      message: 'Menu image can not be empty',
    });
  }
  if (Number.isNaN(Number(menu_price))) {
    return res.status(400).json({
      status: 'Error',
      message: 'Invalid price, please enter a valid price',
    });
  }
  if (menu_name.length > 15) {
    return res.status(400).send({
      status: 'Error',
      message: 'Menu name too long',
    });
  }
  if (menu_price > 50000) {
    return res.status(400).send({
      status: 'Error',
      message: 'The price has exceeded the order\'s valuation',
    });
  }
  if (menu_image.length > 30) {
    return res.status(400).send({
      status: 'Error',
      message: 'Invalid image url',
    });
  }
  return next();
};
