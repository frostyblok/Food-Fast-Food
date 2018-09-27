import express from 'express';
import Order from '../controllers/OrderControllers';
import { validateOrder } from '../middleware/Validation';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  getAllOrders, getOneOrder, placeOrder, updateOrder, deleteOrder,
} = Order;

router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.post('/', validateOrder, placeOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
