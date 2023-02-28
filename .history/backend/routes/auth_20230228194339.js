const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,

} = require('../controllers/auth.js')
const {
  validationMiddleware
} = require('../middlewares/validations_middleware')
const { registerValidation, loginValidation } = require('../validators/auth.js')
const { userAuth } = require('../middlewares/auth_middleware.js')
const {isAuth} =require 
const authRouter = Router();

authRouter.get('/users', getUsers)
authRouter.get('/protected', userAuth, protected)
authRouter.post('/register', registerValidation, validationMiddleware, register)
authRouter.post('/login', loginValidation, validationMiddleware, login)
authRouter.get('/logout', logout)


module.exports = authRouter;