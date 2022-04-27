const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'..' ,'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'Maciel'},
//     {nome: 'Maria'},
//     {nome: 'Tina'},
//     {nome: 'Joao'},
//     {nome: 'Camila'}
// ];

// const json1 = JSON.stringify(pessoas, '' , 2);// identacao com 2 espaços
// escrever(caminhoArquivo, json1);

async function lerArquivo(caminho){
const dados = await ler(caminho);
renderizaDados(dados);
//return dados;
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(valor => console.log(valor.nome));
}
lerArquivo(caminhoArquivo);



// como estou enviando uma promessa, preciso receber essa promessa antes de enviar os dados no caso.
//console.log(lerArquivo(caminhoArquivo).then(dados => console.log(dados)));