import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { produtos, idProduto  } from "../controller/Produtos.js";
import { finalizarCompraSchema } from "../schemas/FinalizarCompraSchema.js";
import { validarFinalizarCompra } from "../middleware/FinalizarCompraMiddleware.js";
import { finalizarCompra } from "../controller/Finalizar.js";

const produtosRouter = Router()

produtosRouter.get("/", produtos)
produtosRouter.get("/produtos/:id", idProduto)
produtosRouter.post("/finalizar", validateSchema(finalizarCompraSchema), finalizarCompra )

export default produtosRouter