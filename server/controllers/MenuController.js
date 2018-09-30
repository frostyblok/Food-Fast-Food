import db from '../models/database';

/* eslint linebreak-style: 0 */
const Menu = {
  /**
    *Gets all orders
    *@param  {Object} req - request
    *@param  {object} res - response
    *@return {object} - status code and  message
    */
  getAllMenu(req, res) {
    const query = 'SELECT * FROM menu';
    db.query(query)
      .then((menu) => {
        res.status(200).json({
          status: 'Success',
          allMenu: menu.rows,
        });
      })
      .catch((err) => {
        res.status(404).json({
          status: 'Error',
          message: 'Error fetching menu',
          err,
        });
      });
  },
  /**
    *Gets all orders
    *@param  {Object} req - request
    *@param  {object} res - response
    *@return {object} - status code and  message
    */
  getOneMenu(req, res) {
    const selectQuery = 'SELECT * FROM menu WHERE id = $1';
    const params = [req.params.id];
    db.query(selectQuery, params)
      .then((order) => {
        if (!order.rows[0]) {
          res.status(404).json({
            status: 'Error',
            message: 'Menu does not exit',
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
  addMenu(req, res) {
    const insertQuery = 'INSERT INTO orders(food_name, food_price, status, created_at) VALUES($1, $2, $3, $4) returning *';
    const params = [
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
  editMenu(req, res) {
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
  deleteMenu(req, res) {
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
};
export default Menu;
