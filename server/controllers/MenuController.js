import db from '../models/database';

/* eslint linebreak-style: 0 */
const Menu = {
  /**
    *Gets all menus
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
    *Gets all menus
    *@param  {Object} req - request
    *@param  {object} res - response
    *@return {object} - status code and  message
    */
  getOneMenu(req, res) {
    const selectQuery = 'SELECT * FROM menu WHERE id = $1';
    if (Number.isNaN(Number(req.params.id))) {
      res.status(400).json({
        status: 'Error',
        message: 'Invalid parameters',
      });
    }
    const params = [req.params.id];
    db.query(selectQuery, params)
      .then((menu) => {
        if (!menu.rows[0]) {
          res.status(404).json({
            status: 'Error',
            message: 'Menu does not exit',
          });
        }
        res.status(200).json({
          status: 'Success',
          menu: menu.rows[0],
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
    const insertQuery = 'INSERT INTO menu(menu_name, menu_price, menu_image, created_at) VALUES($1, $2, $3, $4) returning *';
    const params = [
      req.body.menu_name,
      req.body.menu_price,
      req.body.menu_image,
      new Date(),
    ];
    db.query(insertQuery, params)
      .then((menus) => {
        res.status(201).json({
          status: 'Success',
          message: 'Menu successfully added',
          menu: menus.rows[0],
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 'Error',
          message: 'Could not add new menu at this time',
          err,
        });
      });
  },
  editMenu(req, res) {
    const { id } = req.params;
    const { menu_name, menu_price, menu_image } = req.body;
    if (Number.isNaN(Number(id))) {
      res.status(400).json({
        status: 'Error',
        message: 'Invalid parameters',
      });
    }
    const findQuery = 'SELECT * FROM menu WHERE id = $1';
    let params = [id];
    db.query(findQuery, params)
      .then((menu) => {
        const updateQuery = 'UPDATE menu SET menu_name = $1, menu_price = $2, menu_image = $3 WHERE id = $4';
        params = [menu_name, menu_price, menu_image, menu.rows[0].id];
        db.query(updateQuery, params)
          .then((newMenu) => {
            res.status(200).json({
              status: 'Success',
              message: 'Menu updated successfully',
              menuUpdated: newMenu.rowCount,
            });
          })
          .catch((err) => {
            res.status(400).json({
              status: 'Error',
              message: 'Could not update menu',
              err,
            });
          });
      })
      .catch((err) => {
        res.status(404).json({
          status: 'Error',
          message: 'Menu does not exit',
          err,
        });
      });
  },
  deleteMenu(req, res) {
    const deleteQuery = 'DELETE FROM menu WHERE id = $1 returning *';
    const params = [req.params.id];
    if (Number.isNaN(Number(req.params.id))) {
      res.status(400).json({
        status: 'Error',
        message: 'Invalid parameters',
      });
    }
    db.query(deleteQuery, params)
      .then((menu) => {
        if (!menu.rows[0]) {
          res.status(404).json({
            status: 'Error',
            message: 'No menu with the id found',
          });
        }
        res.status(200).json({
          status: 'Success',
          message: 'Menu successfully deleted',
          deletedMenu: menu.rows[0],
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 'Error',
          message: 'Could not complete request at this time',
          err,
        });
      });
  },
};
export default Menu;
