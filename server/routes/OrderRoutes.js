import express from 'express';
import Orders from '../controllers/OrdersController';
import { validateOrder } from '../middleware/Validation';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  selectAllOrders, selectOneOrder, createOrder, updateOneOrder, deleteOneOrder,
} = Orders;

router.get('/', selectAllOrders);
router.get('/:id', selectOneOrder);
router.post('/', validateOrder, createOrder);
router.put('/:id', updateOneOrder);
router.delete('/:id', deleteOneOrder);

export default router;
