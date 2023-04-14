const express=require('express');
const cors=require('cors');
const app=express();
require('./database');

app.use(cors);
app.use(express.json());
app.use('/api/eventos',require('./routes/employess.routes'));
app.use('/api/noticias',require('./routes/noticias.routes'));
app.use('/api/mensajes',require('./routes/mensajes.routes'));


port=3000;
app.listen(port);
console.log('escuchando en el puerto: '+port);