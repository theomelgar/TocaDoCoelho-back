import { ObjectId } from "mongodb"
import db from "../config/database.js"

export async function produtos(req, res) {
    try {
        const produtos = await db.collection("produtos").find().toArray()
        res.send(produtos)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}