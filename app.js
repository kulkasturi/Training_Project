import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();  

app.use(express.json());//middleware

app.use('/api/v1',authRoutes)

app.use('/api/v1/user', userRoutes);



export default app;

