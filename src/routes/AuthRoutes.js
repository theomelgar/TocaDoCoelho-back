import { Router } from 'express'
import { validateSchema } from "../middleware/validateSchema.js";
import { cadastroSchema } from '../schemas/AuthSchema.js';
import { cadastrarUsuario } from '../controller/Cadastro.js'


const authRouter = Router()

// Rotas de autenticação
authRouter.post("/cadastro", validateSchema(cadastroSchema), cadastrarUsuario);
authRouter.post("/login");

export default authRouter