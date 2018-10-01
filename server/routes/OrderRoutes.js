import express from 'express';
import Orders from '../controllers/OrdersController';
import { validateOrder } from '../middleware/Validation';
import Authentication from '../middleware/authentication';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  selectAllOrders, selectOneOrder, createOrder, updateOneOrder, deleteOneOrder, orderHistory,
} = Orders;

router.get('/', Authentication, selectAllOrders);
router.get('/:id', Authentication, selectOneOrder);
router.get('/users/:id/orders', Authentication, orderHistory);
router.post('/', Authentication, validateOrder, createOrder);
router.put('/:id', Authentication, updateOneOrder);
router.delete('/:id', Authentication, deleteOneOrder);

export default router;
