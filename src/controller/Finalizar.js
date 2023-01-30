import db from "../config/database.js";
import sgMail from '@sendgrid/mail'

//CONTROLLER

export async function finalizarCompra(req, res) {
  const compra = req.body;

  try {

    await db.collection("compras").insertOne(compra);
    const msg = {
      to: compra.email, // Change to your recipient
      from: 'tocadocoelhocompra@gmail.com', // Change to your verified sender
      subject: 'Compra efetuada '+ compra.nome,
      text: 'Obrigado por comprar conosco, seus produtos já estão sendo preparados para o envio.',
      html: '<h1><strong>Obrigado por comprar conosco, seus produtos já estão sendo preparados para o envio.</strong></h1><br><br><h1>Suas compras: '+compra.cesta.map((c)=>c.produto)+'</h1><br><br><h1>Total: '+compra.total+'</h1>',
    }

    await sgMail.send(msg);

    res.status(201).send("Compra finalizada com sucesso!");

  } catch (error) {

    console.log(error);

    res.status(500).send("Erro no servidor");

  }
}