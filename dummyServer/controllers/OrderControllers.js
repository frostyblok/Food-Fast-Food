import OrderModel from '../dummyModels/OrderModels';
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
      OrderModel,
    });
  }
}

export default OrderController;
