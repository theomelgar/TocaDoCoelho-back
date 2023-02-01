import db from "../config/database.js";
import sgMail from '@sendgrid/mail'

//CONTROLLER

export async function finalizarCompra(req, res) {
  const compra = req.body;
  const cesta = compra.cesta
  try {

    await db.collection("compras").insertOne(compra);
    const msg = {
      to: compra.email, // Change to your recipient
      from: 'tocadocoelhocompra@gmail.com', // Change to your verified sender
      subject: compra.nome+', sua compra  foi efetuada ',
      text: 'Obrigado por comprar conosco, seus produtos já estão sendo preparados para o envio.',
      html: `<h1>
      <strong>Obrigado por comprar na Toca do Coelho, seus produtos já estão sendo preparados para o envio.
      <br>
       Endereço de entrega: ${compra.cep}</strong></h1><br><br><h1>Suas compras:
       <br>`
       + cesta.map((c)=>`${c.produto} - Quantidade: ${c.quantidade} - Valor: R$${c.valor}<br>`)
       +'</h1><br><br><h1>Pagamento: '+compra.formaDePagamento+
       '<br>Total: R$'+compra.total+
       `</h1>
       <br>
       <img src="https://media.istockphoto.com/id/1164841097/pt/foto/baby-rabbit-live-in-the-soil-cavity.jpg?s=612x612&w=0&k=20&c=jT7QYSJxCShwq4AmoxWGDERMqpDkYf-tgd_DlWrQhvA="/>`,
    }

    await sgMail.send(msg);

    res.status(201).send("Compra finalizada com sucesso!");

  } catch (error) {

    console.log(error);

    res.status(500).send("Erro no servidor");

  }
}