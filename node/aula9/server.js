const express = require ('express');
const app = express();

// Caso eu queira que o post pega o body do formulario, preciso fazer isso antes
app.use(
    express.urlencoded({
        extended: true
    })
);

// Criar    Listar    Atualizar    Deletar
//  POST    GET       PUT          DELETE

app.get('/', (req, res) => {
    res.send(
        `
        <form action="/" method="post">
        Nome do cliente: <input type="text" name="nome" >
        <button>Enviar Formulario</button>
        </form>
        `
    );
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que vc me enviou foi ${req.body.nome}`);// Pega no name do input no formulario    
})

// Se eu quiser por mais parametros só adicionar '/tests/:idUsuarios?/:parametro?'
app.get('/tests/:idUsuarios?', (req, res) => {
    console.log(req.params);
    // console.log(req.query);// com isso ele loga o que for adicionado na url, ou seja, na rota.
    res.send(req.params.idUsuarios);
    //res.send(req.query.idUsuarios); outra opcao para pegar o parametro da query na url

})
