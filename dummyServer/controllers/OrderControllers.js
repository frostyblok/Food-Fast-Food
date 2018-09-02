import Order from '../dummyModels/OrderModels';
/**
 *
 *@class OrderController
 *@classdesc creates an OrderController Class
 */

class OrderController {
/**
   * @description - Gets all orders
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   *
   * @return {object} - status code and  message
   */
  static getAllOrders(req, res) {
    return res.status(200).send({
      status: 'Success',
      Order,
    });
  }

  /**
   * @description - Gets one order
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   *
   * @return {object} - status code and  message
   */
  static getOneOrder(req, res) {
    for (let i = 0; i < Order.length; i += 1) {
      if (Order[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).json({
          status: 'success',
          Order: Order[i],
        });
      }
    }
    return res.status(400).json({
      message: 'No order with that id found',
    });
  }

  /**
   * Place a new order
   *
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} Success message when an order is placed
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
    return res.status(201).json({
      message: 'you have successfully Registered this business',
      yourOrder: Order[Order.length - 1],
    });
  }
}

export default OrderController;
