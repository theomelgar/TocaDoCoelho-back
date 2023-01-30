import db from "../config/database.js";

//CONTROLLER

export async function finalizarCompra(req, res){

    const compra = req.body;

    try{

        await db.collection("compras").insertOne(compra);

        res.status(201).send("Compra finalizada com sucesso!");

    } catch (error){

        console.log(error);

        res.status(500).send("Erro no servidor");

    }
}