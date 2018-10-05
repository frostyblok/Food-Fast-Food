import express from 'express';
import Menu from '../controllers/MenuController';
import { validateMenu } from '../middleware/Validation';
import Auth from '../middleware/Auth';

/* eslint linebreak-style: 0 */
const router = express.Router();

const {
  getAllMenu, getOneMenu, editMenu, deleteMenu, addMenu,
} = Menu;

const { adminAuthentication, authentication } = Auth;

router.get('/', authentication, getAllMenu);
router.get('/:id', authentication, getOneMenu);
router.post('/', authentication, adminAuthentication, validateMenu, addMenu);
router.put('/:id', authentication, adminAuthentication, validateMenu, editMenu);
router.delete('/:id', authentication, adminAuthentication, deleteMenu);

export default router;
