import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { produtos, idProduto  } from "../controller/Produtos.js";

const produtosRouter = Router()

produtosRouter.get("/", produtos)
produtosRouter.get("/produtos/:id", idProduto)

export default produtosRouter