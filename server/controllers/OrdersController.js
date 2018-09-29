import db from '../models/database';
/* eslint linebreak-style: 0 */

const OrderController = {
  /**
     *Gets all orders
     *@param  {Object} req - request
     *@param  {object} res - response
     *@return {object} - status code and  message
     */
  getAllOrders(req, res) {
    const selectAllOrders = 'SELECT * FROM orders';
    db.query(selectAllOrders)
      .then((orders) => {
        res.status(200).json({
          status: 'Succes',
          orders,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 'Error',
          message: 'Could not fetch all orders',
          err,
        });
      });
  },

  /**
     *Gets one order
     *@param  {Object} req - request
     *@param  {object} res - response
     *@return {object} - status code and  message
     */
  getOneOrder(req, res) {
    const selectOneOrder = 'SELECT * FROM reflections WHERE id = $1';
    const params = [req.params.id];
    db.query(selectOneOrder, params)
      .then((order) => {
        res.status(200).json({
          status: 'Success',
          order: row[0],
        })
      .catch((err) => {
        res.status(400).json({
          status: 'Error',
          err,
        });
      });
  },

  /**
     *Places a new order
     *@param {object} req - The request object
     *@param {object} res - The response object
     *@return {object} Success message when an order is placed
     */
  placeOrder(req, res) {
    const queryText = `INSERT INTO orders(order_id, food_name, food_price, status, created_at) VALUES($1, $2, $3, $4) returning *`;
    const { order_id, food_name, food_price, } = req.body;
    const params = [
      order_id,
      food_name,
      food_price,
      'New',
      new Date(),
    ];
    db.query(queryText, params)
    .then((order) => {
      res.status(200).json({
        status: 'Success',
        message: 'Order successfully placed',
        order,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: 'Error',
        message: 'Could not place order at this time',
        err,
      });
    });
  },

  /**
     *Updates a user's Order profile
     *@param  {Object} req - request
     *@param  {object} res - response
     *@return {object} - status code and  message
     */
  updateOrder(req, res) {
    const {
      status,
    } = req.body;
    const order = Orders.find(data => data.id === parseInt(req.params.id, 10));
    if (order) {
      if (status.toString().toLowerCase() === 'processing' || status.toString().toLowerCase() === 'cancelled' || status.toString().toLowerCase() === 'completed') {
        order.status = status;
        return res.status(200).json({
          message: 'You have successfully updated the Order',
          order,
        });
      }
      return res.status(200).json({
        message: 'You have not updated the Order',
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'You are currently making a bad request',
    });
  },

  /**
     *deletes a user's Order profile
     *@param  {Object} req - request
     *@param  {object} res - response
     *@return {void} - status code and  message
     */
  deleteOrder(req, res) {
    const order = Orders.find(data => data.id === parseInt(req.params.id, 10));
    if (order) {
      Orders.splice(order.id, 1);
      return res.status(200).json({
        status: 'Success',
        message: 'Order deleted succesfully',
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'You are making a bad request',
    });
  },
};

export default OrderController;
