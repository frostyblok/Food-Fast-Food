import express from 'express';
import Order from '../controllers/OrderControllers';

const orderRouter = express.Router();

const { getAllOrders } = Order;

orderRouter.route('/').get(getAllOrders);

export default orderRouter;
