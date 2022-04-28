<<<<<<< HEAD
exports.middlewareGlobal = (req, res, next) => {
    // Isso aqui faz com que a variavel criada possa ser usada dentro de uma tag html entre <%= %>
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render('404');
      // return res.send('Opa tudo errado.')
    }
  
    next();
  };

  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };
=======
exports.middlewareGlobal = (req, res, next) => {
    // Isso aqui faz com que a variavel criada possa ser usada dentro de uma tag html entre <%= %>
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.render('404');
    }
  
    next();
  };

  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };
>>>>>>> ccd03ac24e4bb59c76e7e39cdca504f8362e8298
