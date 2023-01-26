import { Router } from 'express'
import { validateSchema } from "../middleware/validateSchema.js"
import { loginSchema } from '../schemas/AuthSchema.js'
import { logarUsuario } from '../controller/Login.js'

const authRouter = Router()

// Rotas de autenticação
authRouter.post("/cadastro")
authRouter.post("/login", validateSchema(loginSchema), logarUsuario)

export default authRouter