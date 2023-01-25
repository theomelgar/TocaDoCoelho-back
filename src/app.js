import express from "express"
import cors from "cors"
import authRouter from "./routes/AuthRoutes.js"
import operationsRouter from "./routes/ProdutosRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

//routes
app.use([ authRouter, operationsRouter ])

app.listen(PORT, () => console.log("Servidor online na porta: " + PORT)) 