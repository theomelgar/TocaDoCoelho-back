import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import db from "../config/database.js";

export async function cadastrarUsuario(req, res){

    const usuario = req.body;

    const { nome, email, senha, confirmarSenha } = usuario;

    try {

        const usuarioExiste = await db.collection("usuarios").findOne({email});

        if(usuarioExiste) return res.status(409).send("Usuário já existe!");

        await db.collection("usuarios").insertOne({
            nome,
            email,
            senha: bcrypt.hashSync(senha, 10)
        });

        return res.status(201).send("Usuário cadastrado com sucesso");

    } catch(err) {

        console.log(err);

        res.status(500).send("Erro no servidor!");

    }

    
}
