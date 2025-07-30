import { db } from '../config/db.js';

export const createUser = async (userData) => {
    const {pid, p_email, p_name, p_password, p_gender} = userData;
    const query = 'INSERT INTO person1 (pid, p_email, p_name, p_password, p_gender) VALUES (?,?,?,?,?)';
    const [result] = await db.execute(query, [pid, p_email, p_name, p_password, p_gender]);
    return result.insertId;
}

export const getUserByEmail = async (p_email) => {
    const query = 'SELECT * FROM person1 WHERE p_email = ?';
    const [rows] = await db.execute(query, [p_email]);
    return rows[0];
}   