import db from '../models/database';
/* eslint linebreak-style: 0 */

const Orders = {
  /**
     *Gets all orders
     *@param  {Object} req - request
     *@param  {object} res - response
     *@return {object} - status code and  message
     */
  selectAllOrders(req, res) {
    const query = 'SELECT * FROM orders';
    db.query(query)
      .then((orders) => {
        res.status(200).json({
          status: 'Succes',
          allOrders: orders.rows,
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: 'Error',
          message: 'Could not fetch orders',
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
  selectOneOrder(req, res) {
    const queryText = 'SELECT * FROM orders WHERE id = $1';
    const params = [req.params.id];
    db.query(queryText, params)
      .then((order) => {
        if (!order.rows[0]) {
          res.status(404).json({
            status: 'Error',
            message: 'No order found',
          });
        }
        res.status(200).json({
          status: 'Success',
          order: order.rows[0],
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 'Error',
          message: 'could not complete request at this time',
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
  createOrder(req, res) {
    const insertQuery = 'INSERT INTO orders(user_id, food_name, food_price, status, created_at) VALUES($1, $2, $3, $4, $5) returning *';
    const params = [
      req.decoded.id,
      req.body.food_name,
      req.body.food_price,
      'New',
      new Date(),
    ];
    db.query(insertQuery, params)
      .then((orders) => {
        res.status(201).json({
          status: 'Success',
          message: 'Order successfully placed',
          order: orders.rows[0],
        });
      })
      .catch((err) => {
        res.status(400).json({
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
  updateOneOrder(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    const findQuery = 'SELECT * FROM orders WHERE id = $1';
    let params = [id];
    db.query(findQuery, params)
      .then((order) => {
        const updateQuery = 'UPDATE orders SET status = $1 WHERE id = $2';
        params = [status, order.rows[0].id];
        db.query(updateQuery, params)
          .then((newOrder) => {
            res.status(200).json({
              status: 'Success',
              message: 'Order updated successfully',
              orderUpdated: newOrder.rowCount,
            });
          })
          .catch((err) => {
            res.status(400).json({
              status: 'Error',
              message: 'Could not update order',
              err,
            });
          });
      })
      .catch((err) => {
        res.status(404).json({
          status: 'Error',
          message: 'No order with that id found',
          err,
        });
      });
  },

  /**
     *deletes a user's Order profile
     *@param  {Object} req - request
     *@param  {object} res - response
     *@return {void} - status code and  message
     */
  deleteOneOrder(req, res) {
    const deleteQuery = 'DELETE FROM orders WHERE id = $1 returning *';
    const params = [req.params.id];
    db.query(deleteQuery, params)
      .then((order) => {
        if (!order.rows[0]) {
          res.status(404).json({
            status: 'Error',
            message: 'No order with the id found',
          });
        }
        res.status(200).json({
          status: 'Success',
          message: 'Order successfully deleted',
          deletedOrder: order.rows[0],
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 'Error',
          message: 'could not complete request at this time',
          err,
        });
      });
  },
  orderHistory(req, res) {
    const selectQuery = 'SELECT * FROM orders WHERE user_id = $1';
    const params = [
      req.params.id,
    ];
    db.query(selectQuery, params)
      .then((orders) => {
        res.status(200).json({
          status: 'Success',
          orders: orders.rows,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 'Error',
          message: 'Could not fetch order',
          err,
        });
      });
  },
};

export default Orders;
