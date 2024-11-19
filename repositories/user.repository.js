import User from "../models/user.model.js";

async function createUser(user) {
  try {
    User.create(user);
    return await user
  } catch (err) {
    throw err;
  }
}


async function getUser(id) {
  try {
    return await User.findByPk(id, {
        attributes: {exclude: ['password']}
    });
  } catch (err) {
    throw err;
  }
}


async function getUsers() {
    try {
      return await User.findAll(
        {
            attributes: {exclude: ['password']}
        }
      );
    } catch (err) {
      throw err;
    }
  }

// async function updateUser(user) {
//   try {
//     await User.update(user, {
//       where: {
//         userId: user.userId,
//       }
//     })

//   }
// }

async function deleteUser(id) {
  try {
    await User.destroy({
      where: { clientId: id },
    });
  } catch (err) {
    throw err;
  }
}


async function findUserByEmail(email) { return await User.findOne({ where: { email } }); }


export default {
  createUser,
  getUser,
  getUsers,
  // updateUser,
  deleteUser,
  findUserByEmail
};