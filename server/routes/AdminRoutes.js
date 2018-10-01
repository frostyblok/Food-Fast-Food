import express from 'express';
import Admin from '../controllers/AdminController';
import { validateAdminSignin } from '../middleware/Validation';

/* eslint linebreak-style: 0 */
const adminRouter = express.Router();

const { loginAdmin } = Admin;

adminRouter.post('/admin', validateAdminSignin, loginAdmin);

export default adminRouter;
