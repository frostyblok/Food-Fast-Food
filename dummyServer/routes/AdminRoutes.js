import express from 'express';
import Admin from '../controllers/AdminController';

const adminRouter = express.Router();

const { getAllAdmin, loginAdmin } = Admin;

adminRouter.get('/admin', getAllAdmin);
adminRouter.post('/admin', loginAdmin);

export default adminRouter;
