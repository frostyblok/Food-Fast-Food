import express from 'express';
import Orders from '../controllers/OrdersController';
import { validateOrder } from '../middleware/Validation';
import Authentication from '../middleware/authentication';
import auth from '../middleware/adminAuth';


/* eslint linebreak-style: 0 */

const router = express.Router();

const {
  selectAllOrders, selectOneOrder, createOrder, updateOneOrder, deleteOneOrder,
} = Orders;

router.get('/', Authentication, auth, selectAllOrders);
router.get('/:id', Authentication, auth, selectOneOrder);
router.post('/', Authentication, validateOrder, createOrder);
router.put('/:id', Authentication, auth, updateOneOrder);
router.delete('/:id', Authentication, auth, deleteOneOrder);

export default router;
