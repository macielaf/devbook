module.exports = function(req, res, next){
    if(req.body.cliente) {
    console.log();
    console.log(`Vi que vc postou ${req.body.cliente}`);
    console.log();
    }
    next();
};