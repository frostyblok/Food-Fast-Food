import express from 'express';
import Orders from '../controllers/OrdersController';
import Auth from '../middleware/Auth';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  orderHistory,
} = Orders;

const { authentication, userAthentication } = Auth;

router.get('/:id/orders', authentication, userAthentication, orderHistory);

export default router;
