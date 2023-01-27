import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { produtos } from "../controller/Produtos.js";
import { carrinhos } from "../controller/carrinho.js"


const carrinhosRouter = Router()

carrinhosRouter.post("/carrinhos", carrinhos)




export default carrinhosRouter