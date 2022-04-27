exports.paginaInicial = (req, res) => {
    res.render('index');
    return; // nao vou usar nenhum midleware aqui
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return; // nao vou usar nenhum midleware aqui
};