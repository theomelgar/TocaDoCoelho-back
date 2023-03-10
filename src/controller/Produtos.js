import { ObjectId } from "mongodb"
import db from "../config/database.js"

export async function produtos(req, res) {
    try {
        const produtos = await db.collection("produtos").find().toArray()
        if(!produtos) res.status(422).send("Não existe um lista de produtos")
        res.send(produtos)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export async function idProduto(req, res) {
    const {id} = req.params
    try {
        const produto = await db.collection("produtos").findOne({_id: ObjectId(id) })
        if(!produto) res.status(422).send("Não existe na lista de produtos")
        res.send(produto)
    } catch (error) {
        console.log(error)
        res.status(500).send((error))
    }
}
