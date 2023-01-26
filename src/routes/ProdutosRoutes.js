import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { produtos, idProduto, cesta  } from "../controller/Produtos.js";
import { cestaSchema } from "../schemas/CestaSchema.js";

const produtosRouter = Router()

produtosRouter.get("/", produtos)
produtosRouter.get("/produtos/:id", idProduto)

export default produtosRouter