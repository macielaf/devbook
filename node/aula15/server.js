require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Desta forma primeiro ele se conecta para depois começar a escutar a conexao.
//Emitimos um sinal e depois o app pega esse sinal e da andamento a aplicacao
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Conectado a base de dados') 
    app.emit('Pronto');
}).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
//Pasta de conteudo estatico - usando caminho absoluto
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());


const sessionOptions = session({
    secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
    // store: new MongoStore({ mongooseConecction: mongoose.connection }),
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    }
  });
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho absoluto pasta de views
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('Pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});