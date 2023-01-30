import { Router } from "express";
import { produtos, idProduto  } from "../controller/Produtos.js";

const produtosRouter = Router()

produtosRouter.get("/", produtos)
produtosRouter.get("/produtos/:id", idProduto)

export default produtosRouter