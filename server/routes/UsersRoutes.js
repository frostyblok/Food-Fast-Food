/* eslint linebreak-style: 0 */
import express from 'express';
import Users from '../controllers/UserController';
import { validateSignup, validateSignin } from '../middleware/Validation';

/* eslint linebreak-style: 0 */

const userRouter = express.Router();

const {
  userLogin, userSignup,
} = Users;

userRouter.post('/signup', validateSignup, userSignup);
userRouter.post('/login', validateSignin, userLogin);

export default userRouter;
