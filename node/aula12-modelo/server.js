const express = require('express');
const app = express();

const mongoose = require('mongoose');
// Desta forma primeiro ele se conecta para depois começar a escutar a conexao.
//Emitimos um sinal e depois o app pega esse sinal e da andamento a aplicacao
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Conectado a base de dados') 
    app.emit('Pronto');
})


const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

//Pasta de conteudo estatico - usando caminho absoluto
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho absoluto pasta de views
app.set('view engine', 'ejs');

app.use(routes);

app.on('Pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});