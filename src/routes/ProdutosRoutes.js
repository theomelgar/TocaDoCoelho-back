import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { produtos } from "../controller/Produtos.js";

const produtosRouter = Router()

produtosRouter.get("/", produtos)

export default produtosRouter