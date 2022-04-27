require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING,
{
})
.then(() => {
    console.log('Conectado a base de dados') 
    app.emit('pronto');
})
.catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

app.use(express.urlencoded({extended: true}));

//Pasta de conteudo estatico - usando caminho absoluto
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho absoluto pasta de views
app.set('view engine', 'ejs');

const sessionOption = session ({
    secret: 'sjdhksjdhksjdhkjsdhksjdhkjsdh',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});


// Nossos proprios Middlewares
app.use(express.json());
app.use(meuMiddleware);
app.use(routes);
app.use(sessionOption);
app.use(flash());

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
