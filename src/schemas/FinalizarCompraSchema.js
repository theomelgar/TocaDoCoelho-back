//SCHEMA

import joi from "joi";

export const finalizarCompraSchema = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    cep: joi.string().required(),
    formaDePagamento: joi.string().required(),
    cesta: joi.array().required(),
    total: joi.string().required(),
    idUsuario: joi.string().required(),
    criadoEm: joi.required()
});