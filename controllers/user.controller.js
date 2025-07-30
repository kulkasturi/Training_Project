import bcrypt from 'bcrypt';
import { getUserByEmail, createUser } from '../models/user.model.js';
import { db } from '../config/db.js';
export const registerUser = async (req, res) => {
    try {
        const userData = req.body;

        const existingUser = await getUserByEmail(userData.p_email);
        console.log('Existing User:', existingUser);
        if (existingUser) {
            return res.status(400).json({ status: 'error', message: 'User already exists' });
        }

        console.log('User Data Before Hashing:', userData);
        const hashedPassword = await bcrypt.hash(userData.p_password, 10);
        userData.p_password = hashedPassword;

        console.log('Hashed Password:', hashedPassword);
        console.log('User Data:', userData);

        //  Destructure correctly from userData
        const { pid, p_email, p_name, p_password, p_gender } = userData;

        const userId = await createUser({
            pid,
            p_email,
            p_name,
            p_password,
            p_gender
        });

        console.log(' User inserted with ID:', userId);
        res.status(201).json({ status: 'success', message: 'User registered successfully', userId });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ status: 'error', message: 'Error registering user', error: error.message });
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const query = 'SELECT * FROM person1';
        const [users] = await db.execute(query);
        res.status(200).json({ status: 'success', data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ status: 'error', message: 'Error fetching users', error: error.message });
    }
}



export const updateUser = async (req, res) => {
    try {
        const { p_email, p_name, p_password } = req.body;
        const pid = req.params.pid;
        const query = 'UPDATE person1 SET p_email = ?, p_name = ?, p_password = ? WHERE pid = ?';
        const [result] = await db.execute(query, [p_email, p_name, p_password, pid]);
        if (result.affectedRows > 0) {
            res.status(200).json({ status: 'success', message: 'User updated successfully' });
        } else {
            res.status(404).json({ status: 'error', message: 'User not found' });
        }  
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ status: 'error', message: 'Error updating user', error: error.message });
    }   
}




