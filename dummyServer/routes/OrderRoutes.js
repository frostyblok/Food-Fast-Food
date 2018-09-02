import express from 'express';
import Order from '../controllers/OrderControllers';

const router = express.Router();

const {
  getAllOrders, getOneOrder, placeOrder, updateOrder,
} = Order;

router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.post('/', placeOrder);
router.put('/:id', updateOrder);

export default router;
