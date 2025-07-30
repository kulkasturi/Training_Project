import express from 'express';
const userRouter = express.Router();
import { getAllUsers, updateUser } from '../controllers/user.controller.js';


userRouter.get('/profile', (req, res) => {
    res.json({status: 'success', message: 'User Profile route'});
});

userRouter.get('/settings', (req, res) => {
    res.json({status: 'success', message: 'User Settings route'});
});     


userRouter.get('/getAllUsers', getAllUsers);

userRouter.get('/updateUser/:pid', updateUser);
export default userRouter;