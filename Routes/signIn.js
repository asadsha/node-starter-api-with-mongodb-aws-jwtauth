import express from 'express';
import userSignIn from '../Controllers/userSignin';
import adminSignIn from '../Controllers/adminSignin';
import userValidator from '../validations/user';

const signInRouter = express.Router();

signInRouter.post('/', userValidator.userSignin, userSignIn);

signInRouter.post('/admin', adminSignIn);

export default signInRouter;
