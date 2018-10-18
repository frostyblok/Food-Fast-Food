import express from 'express';
import Menu from '../controllers/MenuController';
import { validateMenu } from '../middleware/Validation';
import Auth from '../middleware/Auth';
import checkParams from '../middleware/CheckParams';

/* eslint linebreak-style: 0 */
const router = express.Router();

const {
  getAllMenu, getOneMenu, editMenu, deleteMenu, addMenu,
} = Menu;

const { adminAuthentication, authentication } = Auth;
const { idChecker } = checkParams;


router.get('/', authentication, getAllMenu);
router.get('/:id', authentication, idChecker, getOneMenu);
router.post('/', authentication, adminAuthentication, validateMenu, addMenu);
router.put('/:id', authentication, adminAuthentication, validateMenu, idChecker, editMenu);
router.delete('/:id', authentication, adminAuthentication, idChecker, deleteMenu);

export default router;
