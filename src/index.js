const express = require('express');
const app= express();
const path = require('path');


// app.use(exress.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index')) 

app.use(express.static(path.join(__dirname, 'public')))



app.listen(3000, ()=> {
    console.log('Servidor en el puerto 3000 ahuevo')
});