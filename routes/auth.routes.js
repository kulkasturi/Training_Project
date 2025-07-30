import express from 'express';
const router = express.Router();
import { registerUser } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
router.get('/login', (req,res) => {
    res.json({status: 'success', message: 'Login route'});
});



router.get('/signup', (req,res) => {
    res.json({status: 'success', message: 'SignUp route'});
});


router.get('/forgotPassword', (req,res) => {
    res.json({status: 'success', message: 'Forgot Password route'});
});


router.post('/register', registerUser );



// http://localhost:8980/api/v1/profile/101
router.get('/profile/:pid' , (eq,res) => {
    const userid = req.params.pid;
    res.json({userid : userid, status: "Success" , message: "User Profile route"});

});




// wont execute for my db as there is no field like role. 
// http://localhost:8980/api/v1/profile?role=admin&uid=101
router.get('/profile', (req,res) => {
    const role = req.query.role;
    const uid = req.query.uid;  
    res.json({role: role, uid: uid, status: "Success" , message: "User Profile route with query params"});  
});


// localhost:8980/api/v1/secure_url
router.get('/secure_url', authMiddleware, (req, res) => {
    res.json({status: 'success', message: 'Secure URL accessed'});
});

export default router;