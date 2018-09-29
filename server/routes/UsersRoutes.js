/* eslint linebreak-style: 0 */
import express from 'express';
import Users from '../dummyControllers/UserController';
import { validateSignup, validateSignin } from '../middleware/Validation';

const userRouter = express.Router();

const {
  createUser, getAllUsers, loginUser,
} = Users;

userRouter.post('/signup', validateSignup, createUser);
userRouter.post('/login', validateSignin, loginUser);
userRouter.get('/users', getAllUsers);

export default userRouter;
