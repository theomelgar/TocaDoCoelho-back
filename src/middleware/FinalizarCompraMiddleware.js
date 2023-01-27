//MIDDLEWARE
import dayjs from "dayjs";
import { finalizarCompraSchema } from "../schemas/FinalizarCompraSchema";

export function validarFinalizarCompra(req, res, next){

    const { nome, email, cep, formaDePagamento, cesta, total } = req.body;

    const usuario = res.locals.sessao;

    const compra = {
        nome, 
        email,
        cep,
        formaDePagamento,
        cesta,
        total,
        usuario: usuario._id,
        criadoEm: dayjs().format("DD/MM/YYYY")
    }

    const { error } = finalizarCompraSchema.validate(compra, {abortEarly:false});

    if(error) {

        const mensagem = error.details.map(detail => detail.message);
        return res.status(400).send(mensagem);
    
    }

    res.locals.compra = compra;

    next();
}



/*
res.locals.sessao = checkSessao

            await db.collection("sessoes").insertOne({
                idUsuario: usuario._id,
                token
            });
            */