"use strict";

var express = require('express');
const { Server } = require('http');

var app = express();

var path = require('path'); // app.use(exress.urlencoded({extended: false}));


app.use(express.urlencoded({
  extended: false
}));
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(require('./routes/index'));
app.use(express["static"](path.join(__dirname, 'public')));
// app.listen(3000, function () {
//   console.log('Servidor en el puerto 3000 ahuevo');
// }
server.listenerCount(app.get('port'),()=>{
console.log('Server on port ${app.get("port")}');
});
