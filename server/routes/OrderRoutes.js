import express from 'express';
import Order from '../dummyControllers/OrderControllers';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  getAllOrders, getOneOrder, placeOrder, updateOrder, deleteOrder,
} = Order;

router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.post('/', placeOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
