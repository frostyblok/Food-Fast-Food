import express from 'express';
import Orders from '../controllers/OrdersController';
import checkParams from '../middleware/CheckParams';
import Auth from '../middleware/Auth';

/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  orderHistory,
} = Orders;

const { idChecker } = checkParams;
const { authentication, userAthentication } = Auth;

router.get('/:id/orders', authentication, idChecker, userAthentication, orderHistory);

export default router;
