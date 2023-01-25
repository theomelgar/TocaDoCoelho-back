import db from "../config/database.js";

export async function authValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')
    if (!token) return res.status(422).send("Informe o token!")
    
    try {
        const checkSessao = await db.collection("sessoes").findOne({ token })

        if (!checkSessao) return res.status(401).send("No authorization")

        res.locals.sessao = checkSessao
        
        next()

    } catch (error) {
        res.status(500).send(error)
    }
}