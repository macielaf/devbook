const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Middleware serve para interceptar algo entre situações,
//exemplo, entre uma url e uma responsta ao usuario afim de pegar ou passar alguma informacao

// Se nao usar o next nao passa para a proxima requição
// function middleware(req, res, next){
// req.session = {nome: 'Maciel', sobrenome: 'Ferreira'};
// console.log();
// console.log('Passei no seu Middleware');
// console.log();
// next();
// }


// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;