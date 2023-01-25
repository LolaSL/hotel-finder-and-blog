const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require('../controllers/auth')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const authRouter = Router()

authRouter.get('/get-users', getUsers)
authRouter.get('/protected', userAuth, protected)
authRouter.post('/register', registerValidation, validationMiddleware, register)
authRouter.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)

module.exports = router;