import Orders from '../dummyModels/OrderModels';
/* eslint linebreak-style: 0 */
const OrderController = {
/**
   *Gets all orders
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  getAllOrders(req, res) {
    return res.status(200).json({
      status: 'Success',
      Orders,
    });
  },

  /**
   *Gets one order
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  getOneOrder(req, res) {
    const order = Orders.find(data => data.id === parseInt(req.params.id, 10));
    if (order) {
      return res.status(200).json({
        status: 'success',
        Order: order,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'No order with that id found',
    });
  },

  /**
   *Places a new order
   *@param {object} req - The request object
   *@param {object} res - The response object
   *@return {object} Success message when an order is placed
   */
  placeOrder(req, res) {
    const {
      orderName, amount,
    } = req.body;
    const newOrder = {
      id: Orders.length + 1,
      orderName,
      amount,
      status: 'New',
    };
    Orders.push(newOrder);
    return res.status(201).json({
      message: 'you have successfully placed this Order',
      yourOrder: newOrder,
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
