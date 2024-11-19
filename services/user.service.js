
import UserRepository from '../repositories/user.repository.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'; 
dotenv.config();

async function createUser(user) {
  // Criptografar a senha 
  const salt = await bcrypt.genSalt(10); 
  user.password = await bcrypt.hash(user.password, salt);

  return await UserRepository.createUser(user); 
}

async function getUser(id) {
  return await UserRepository.getUser(id);
}

async function getUsers() {
    return await UserRepository.getUsers();
  }

async function deleteUser(id) {
  await UserRepository.deleteUser(id);
}


async function updateUser(user) {
  await UserRepository.updateUser(user);
}




export default {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser  
};