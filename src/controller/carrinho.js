import db from "../config/database.js"



export async function carrinhos (req, res)  {

    const { valor, quantidade} = req.body;

    try {

      
        await db.collection('carrinho').insertOne({
            valor: valor,
            quantidade: quantidade
        })
        return res.status(201).send('create')

    } catch (err) { return res.status(500).send(err.message) }
}



