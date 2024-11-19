
import AuthRepository from '../repositories/auth.repository.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'; 
dotenv.config();

async function authenticateUser(email, password) { 
  const user = await AuthRepository.findUserByEmail(email); 
  if (!user || !await bcrypt.compare(password, user.password)) { 
    throw new Error('Invalid email or password');
   } 
   const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' }); return { token, user };
 }

export default {
  authenticateUser
};