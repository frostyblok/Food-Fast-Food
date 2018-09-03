import express from 'express';
import Users from '../controllers/UserController';

const userRouter = express.Router();

const {
  createUser, getAllUsers, loginUser,
} = Users;

userRouter.post('/signup', createUser);
userRouter.post('/login', loginUser);
userRouter.get('/users', getAllUsers);

export default userRouter;
