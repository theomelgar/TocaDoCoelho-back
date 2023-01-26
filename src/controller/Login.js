import db from "../config/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";


export async function logarUsuario(req, res){

    const { email, senha } = req.body;

    try{

        const usuario = await db.collection("usuarios").findOne({ email });

        if(!usuario) return res.status(422).send("Usuário não encontrado");
        
        if(usuario && bcrypt.compareSync(senha, usuario.senha)){

            const token = uuid();

            await db.collection("sessoes").insertOne({
                idUsuario: usuario._id,
                token
            });

            res.status(200).send({
                nome: usuario.nome,
                email: usuario.email,
                token,
                idUsuario: usuario._id
            });

        } else {

            return res.status(401).send("Senha ou usuário incorretos");

        }
    } catch(err) {

        console.log(err);

        res.status(500).send("Erro no servidor!");

    }
}
