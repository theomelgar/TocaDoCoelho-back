import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import sgMail from '@sendgrid/mail'

dotenv.config()

let db;

const mongoClient = new MongoClient(process.env.MONGO_URI)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
try {
    await mongoClient.connect()
    db = mongoClient.db("Coelho")
} catch (error) {
    console.log("Erro no servidor")
}
export default db