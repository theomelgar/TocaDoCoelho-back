import { Router } from 'express'
import { validateSchema } from "../middleware/validateSchema.js"

const authRouter = Router()

// Rotas de autenticação
authRouter.post("/cadastro")
authRouter.post("/login")

export default authRouter