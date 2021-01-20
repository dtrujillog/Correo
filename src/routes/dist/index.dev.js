"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var nodemailer = require('nodemailer');

router.post('/send-email', function _callee(req, res) {
  var _req$body, name, email, phone, message, transporter, info;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, phone = _req$body.phone, message = _req$body.message;
          contentHTML = "\n        <h1>Informacion de Contacto</h1>\n        <ul>\n            <li>Username: ".concat(name, "</li>\n            <li>User Email: ").concat(email, "</li>\n            <li>PhoneNumber: ").concat(phone, "</li>\n        </ul>\n        <p>").concat(message, "</p>\n    ");
          transporter = nodemailer.createTransport({
            host: 'mail.emfama.com',
            port: 587,
            secure: false,
            auth: {
              user: 'dtrujillo@emfama.com',
              pass: 'Mega1989'
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: '"Diego Trujillo" <dtrujillo@emfama.com>',
            // sender address,
            to: email,
            subject: 'Formulario de Contacto',
            // text: 'Hello World'
            html: contentHTML
          }));

        case 5:
          info = _context.sent;
          console.log('Message sent: %s', info.messageId); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview only available when sending through an Ethereal account

          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

          res.redirect('/success.html');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;