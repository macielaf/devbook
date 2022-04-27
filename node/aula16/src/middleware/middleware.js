module.exports = function(req, res, next){
    // Isso aqui faz com que a variavel criada possa ser usada dentro de uma tag html entre <%= %>
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
}