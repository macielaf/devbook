const express = require ('express');
const app = express();


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

app.get('/contato', (req, res) =>{
   res.send('Pagina de contato') ;
});

app.post('/', (req, res) => {
    res.send('Formulario recebido');
    
})
