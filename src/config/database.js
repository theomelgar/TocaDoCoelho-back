import dotenv from "dotenv"
import { MongoClient } from "mongodb"

dotenv.config()

let db;

const mongoClient = new MongoClient(process.env.MONGO_URI)
try {
    await mongoClient.connect()
    db = mongoClient.db("Coelho")
} catch (error) {
    console.log("Erro no servidor")
}
export default db