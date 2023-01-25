import { Router } from 'express'
import { getUsers, register, login, protected, logout } from '../controllers/auth'
import { validationMiddleware } from '../middlewares/validations-middleware'
import { registerValidation, loginValidation } from '../validators/auth'
import { userAuth } from '../middlewares/auth-middleware'
const authRouter = Router()

authRouter.get('/get-users', getUsers)
authRouter.get('/protected', userAuth, protected)
authRouter.post('/register', registerValidation, validationMiddleware, register)
authRouter.post('/login', loginValidation, validationMiddleware, login)
authRouter.get('/logout', logout)

export default authRouter;