import express from 'express';
import Users from '../controllers/UserController';
import { validateSignup, validateSignin } from '../middleware/Validation';

/* eslint linebreak-style: 0 */

const userRouter = express.Router();

const {
  createUser, getAllUsers, loginUser,
} = Users;

userRouter.post('/signup', validateSignup, createUser);
userRouter.post('/login', validateSignin, loginUser);
userRouter.get('/users', getAllUsers);

export default userRouter;
