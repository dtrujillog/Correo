"use strict";

var express = require('express');

var app = express();

var path = require('path'); // app.use(exress.urlencoded({extended: false}));


app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(require('./routes/index'));
app.use(express["static"](path.join(__dirname, 'public')));
app.listen(3000, function () {
  console.log('Servidor en el puerto 3000 ahuevo');
});