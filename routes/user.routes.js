import express from 'express';
const userRouter = express.Router();
import { getAllUsers, updateUser, deleteUser } from '../controllers/user.controller.js';


userRouter.get('/profile', (req, res) => {
    res.json({status: 'success', message: 'User Profile route'});
});

userRouter.get('/settings', (req, res) => {
    res.json({status: 'success', message: 'User Settings route'});
});     


userRouter.get('/getAllUsers', getAllUsers);

userRouter.get('/updateUser/:pid', updateUser);


// http://localhost:8980/api/v1/user/deleteUser/:pid
userRouter.get('/deleteUser/:pid',deleteUser);


export default userRouter;


