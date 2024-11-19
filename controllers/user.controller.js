import UserService from '../services/user.service.js'

async function createUser(req, res, next) {
  try {
    let user = req.body;
     
    if (
      !user.name ||
      !user.email ||
      !user.password 

    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    user = await UserService.createUser(user);
    res.send(user);
    logger.info(`POST / user - ${JSON.stringify(user)}`);

  } catch (err) {
    next(err);
  }
}

//========================

async function getUser(req, res, next) {
  try {
    res.send(await UserService.getUser(req.params.id));
    logger.info("GET /client");
  } catch (err) {
    next(err);
  }
}

//=======================

async function getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();
      res.send(users);
      logger.info("GET /users");
    } catch (err) {
      next(err);
    }
  }
  
//======================

async function deleteUser(req, res, next) {
  try {
    await UserService.deleteUser(req.params.id);
    res.end();
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

//=============================

async function updateUser(req, res, next) {
  try {
    let user = req.body;
    if (
      !user.id ||
      !user.name ||
      !user.email ||
      !user.password
    ) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    user = await UserService.updateUser(user);
    res.send(user);
    logger.info(`PUT / client - ${JSON.stringify(user)}`);
    logger.info("PUT /client");
  } catch (err) {
    next(err);
  }
}


export default {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
};