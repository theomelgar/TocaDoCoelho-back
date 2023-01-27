//SCHEMA

import joi from "joi";

export const finalizarCompraSchema = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    cep: joi.number().required(),
    formaDePagamento: joi.string().required(),
    cesta: joi.object().required(),
    total: joi.number().required(),
    usuario: joi.object().required(),
    criadoEm: joi.string().required()
});