import User from "../models/user.model.js";

async function findUserByEmail(email) { 
    return await User.findOne({ where: { email } }); }

export default {
  findUserByEmail
};