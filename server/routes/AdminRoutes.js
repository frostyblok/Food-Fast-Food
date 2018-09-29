import express from 'express';
import Admin from '../dummyControllers/AdminController';
import { validateAdminSignin } from '../middleware/Validation';

const adminRouter = express.Router();

const { getAllAdmin, loginAdmin } = Admin;

adminRouter.get('/admin', getAllAdmin);
adminRouter.post('/admin', validateAdminSignin, loginAdmin);

export default adminRouter;
