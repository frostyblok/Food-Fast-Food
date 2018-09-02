import express from 'express';
import Order from '../controllers/OrderControllers';

const router = express.Router();

const { getAllOrders, getOneOrder } = Order;

router.get('/', getAllOrders);
router.get('/:id', getOneOrder);

export default router;
