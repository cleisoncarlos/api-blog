import AuthService  from '../services/auth.service.js'


async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { token, user } = await AuthService.authenticateUser(email, password);
    res.json({ token, user });
    
    logger.info("POST /login");
  } catch (err) {
    next(err);
  }
}

export default {login};