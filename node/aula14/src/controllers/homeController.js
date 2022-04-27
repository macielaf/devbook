const HomeModel = require('../models/HomeModel');

HomeModel.find() // tras todos os dados.
.then(dados => console.log(dados))
.catch(e => console.log(e));
// HomeModel.create({
//     titulo: 'Titulo de teste 2',
//     descricao: 'Descricao de teste 2'
// }).then(dados => console.log(dados))
// .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};