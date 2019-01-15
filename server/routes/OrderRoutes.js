import express from 'express';
import Orders from '../controllers/OrdersController';
import { validateOrder } from '../middleware/Validation';
import Auth from '../middleware/Auth';
import checkParams from '../middleware/CheckParams';


/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  getAllOrders, getOneOrder, createOrder, updateOneOrder, deleteOneOrder,
} = Orders;

const { idChecker } = checkParams;
const { authentication, adminAuthentication } = Auth;

router.get('/', authentication, adminAuthentication, getAllOrders);
router.get('/:id', authentication, idChecker, getOneOrder);
router.post('/', authentication, validateOrder, createOrder);
router.put('/:id', authentication, adminAuthentication, idChecker, updateOneOrder);
router.delete('/:id', authentication, idChecker, deleteOneOrder);

export default router;
