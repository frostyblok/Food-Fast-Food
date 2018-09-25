import Orders from '../dummyModels/OrderModels';

const OrderController = {
/**
   *Gets all orders
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  getAllOrders(req, res) {
    if (!Orders) {
      res.status(400).json({
        message: 'No order found',
      });
    }
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
      orderName, amount, status,
    } = req.body;
    const newOrder = {
      id: Orders.length + 1,
      orderName,
      amount,
      status,
    };
    Orders.push(newOrder);
    return res.status(201).json({
      message: 'you have successfully Registered this Order',
      yourOrder: Orders[Orders.length - 1],
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
      order.status = status;
      const updatedOrder = order.status;
      return res.status(200).json({
        message: 'You have successfully updated your Order',
        updatedOrder,
      });
    }
    return res.status(400).json({
      message: 'You are currently making a bad request',
    });
  },

  /**
   *deletes a user's Order profile
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {void} - status code and  message
   */
  cancelOrder(req, res) {
    const order = Orders.findIndex(data => data.id === parseInt(req.params.id, 10));
    if (order) {
      Orders.splice(order, 1);
    }
    return res.status(200).json({
      message: 'Order cancelled succesfully',
    });
  },
};

export default OrderController;
