import express from 'express';
import Orders from '../controllers/OrdersController';
import Authentication from '../middleware/authentication';
import orderAuthCheck from '../middleware/orderhistoryCheck';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  orderHistory,
} = Orders;

router.get('/:id/orders', Authentication, orderAuthCheck, orderHistory);

export default router;
