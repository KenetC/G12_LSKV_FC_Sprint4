const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.set('view engine','ejs'); // Para "activar" ejs 
app.set('views',__dirname + '/src/views'); // No hace falta, cuando se tiene a views en la parte principal 

const usersRoutes = require('./src/routers/userRoutes');
const productRoutes = require('./src/routers/productRoutes');
const homeRoutes = require('./src/routers/homeRoutes');

app.use('/', homeRoutes);
app.use('/product', productRoutes);
app.use('/users', usersRoutes);



app.listen (process.env.PORT || port, () =>{
    console.log(`Servidor funcionando en el puerto ${port}` )
})
