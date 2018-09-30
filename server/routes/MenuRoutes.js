import express from 'express';
import Menu from '../controllers/MenuController';
import { validateMenu } from '../middleware/Validation';

/* eslint linebreak-style: 0 */
const router = express.Router();

const {
  getAllMenu, getOneMenu, editMenu, deleteMenu, addMenu,
} = Menu;

router.get('/', getAllMenu);
router.get('/:id', getOneMenu);
router.post('/', validateMenu, addMenu);
router.put('/:id', editMenu);
router.delete('/:id', deleteMenu);

export default router;
