import Order from '../dummyModels/OrderModels';

/**
 *@class OrderController
 *@classdesc creates an OrderController Class
 */
class OrderController {
/**
   *Gets all orders
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  static getAllOrders(req, res) {
    if (!Order) {
      res.status(400).send({
        message: 'No order found',
      });
    }
    return res.status(200).send({
      status: 'Success',
      Order,
    });
  }

  /**
   *Gets one order
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  static getOneOrder(req, res) {
    for (let i = 0; i < Order.length; i += 1) {
      if (Order[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).send({
          status: 'success',
          Order: Order[i],
        });
      }
    }
    return res.status(400).send({
      message: 'No order with that id found',
    });
  }

  /**
   *Places a new order
   *@param {object} req - The request object
   *@param {object} res - The response object
   *@return {object} Success message when an order is placed
   */
  static placeOrder(req, res) {
    const {
      orderName, amount, status,
    } = req.body;
    const newOrder = {
      id: Order.length + 1,
      orderName,
      amount,
      status,
    };
    Order.push(newOrder);
    return res.status(201).send({
      message: 'you have successfully Registered this Order',
      yourOrder: Order[Order.length - 1],
    });
  }

  /**
   *Updates a user's Order profile
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {object} - status code and  message
   */
  static updateOrder(req, res) {
    const {
      status,
    } = req.body;
    let updatedOrder;
    for (let i = 0; i < Order.length; i += 1) {
      if (Order[i].id === parseInt(req.params.id, 10)) {
        Order[i].status = status;
        updatedOrder = Order[i];
        return res.status(200).send({
          message: 'You have successfully updated your Order',
          updatedOrder,
        });
      }
    }
    return res.status(400).send({
      message: 'You are currently making a bad request',
    });
  }

  /**
   *deletes a user's Order profile
   *@param  {Object} req - request
   *@param  {object} res - response
   *@return {void} - status code and  message
   */
  static cancelOrder(req, res) {
    for (let i = 0; i < Order.length; i += 1) {
      if (Order[i].id === parseInt(req.params.id, 10)) {
        Order.splice(i, 1);
      }
    }
    return res.status(200).send({
      message: 'Order cancelled succesfully',
    });
  }
}

export default OrderController;
