import express from 'express';
import Menu from '../controllers/MenuController';
import Authentication from '../middleware/authentication';
import auth from '../middleware/adminAuth';
import { validateMenu } from '../middleware/Validation';

/* eslint linebreak-style: 0 */
const router = express.Router();

const {
  getAllMenu, getOneMenu, editMenu, deleteMenu, addMenu,
} = Menu;

router.get('/', Authentication, getAllMenu);
router.get('/:id', Authentication, getOneMenu);
router.post('/', Authentication, auth, validateMenu, addMenu);
router.put('/:id', Authentication, auth, validateMenu, editMenu);
router.delete('/:id', Authentication, auth, deleteMenu);

export default router;
