import express from 'express';
import Orders from '../controllers/OrdersController';
import { validateOrder } from '../middleware/Validation';
import Auth from '../middleware/Auth';


/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  getAllOrders, getOneOrder, createOrder, updateOneOrder, deleteOneOrder,
} = Orders;

const { authentication, adminAuthentication } = Auth;

router.get('/', authentication, adminAuthentication, getAllOrders);
router.get('/:id', authentication, adminAuthentication, getOneOrder);
router.post('/', authentication, validateOrder, createOrder);
router.put('/:id', authentication, adminAuthentication, updateOneOrder);
router.delete('/:id', authentication, adminAuthentication, deleteOneOrder);

export default router;
