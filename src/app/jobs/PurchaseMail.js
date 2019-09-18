const Mail = require("../services/Mail");

class PurchaseEmail {
  get key() {
    return "PurchaseMail";
  }

  async handle(job, done) {
    const { ad, user, content } = job.data;

    await Mail.sendMail({
      from: '"Matheus de Lima" <math@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de Compra: ${ad.title}`,
      html: `
      <html>

      <head>
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif
          }
        </style>
      </head>
      
      <body>
        <strong>Olá, ${ad.author.name}</strong>
        <p>Você tem uma nova solicitação de compra para o anúncio ${ad.author.name}</p>
        <br>
        <strong>${ad.author.name} (${ad.author.name})</strong>
        <p>${content}</p>
      </body>
      
      </html>
      `
    });

    return done();
  }
}

module.exports = new PurchaseEmail();
