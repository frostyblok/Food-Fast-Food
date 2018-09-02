import express from 'express';
import Users from '../controllers/UserController';

const userRouter = express.Router();

const {
  createUser, getAllUsers,
} = Users;

userRouter.post('/signup', createUser);
userRouter.get('/users', getAllUsers);

export default userRouter;
