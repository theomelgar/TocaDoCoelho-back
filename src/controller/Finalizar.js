import db from "../config/database";

//CONTROLLER

export async function finalizarCompra(req, res){

    const compra = res.locals.compra;

    try{

        await db.collection.insertOne(compra);

        res.status(201).send("Compra finalizada com sucesso!");

    } catch (error){

        console.log(error);

        res.status(500).send("Erro no servidor");

    }
}