import { ObjectId } from "mongodb"
import db from "../config/database.js"

export async function produtos(req, res) {
    try {
        res.send("PRODUTOS")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}