import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";
import { finalizarCompraSchema } from "../schemas/FinalizarCompraSchema.js";
import { finalizarCompra } from "../controller/Finalizar.js";

const FinalizarRouter = Router()

FinalizarRouter.use(authValidation)
FinalizarRouter.post("/finalizar", validateSchema(finalizarCompraSchema), finalizarCompra )

export default FinalizarRouter