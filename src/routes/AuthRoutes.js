import { Router } from 'express'
import { validateSchema } from "../middleware/validateSchema.js";
import { cadastroSchema } from '../schemas/AuthSchema.js';
import { cadastrarUsuario } from '../controller/Cadastro.js'
import { loginSchema } from '../schemas/AuthSchema.js'
import { logarUsuario } from '../controller/Login.js'

const authRouter = Router()

// Rotas de autenticação
authRouter.post("/cadastro", validateSchema(cadastroSchema), cadastrarUsuario);
authRouter.post("/login", validateSchema(loginSchema), logarUsuario)

export default authRouter