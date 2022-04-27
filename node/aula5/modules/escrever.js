const fs = require('fs').promises;


// const caminhoArquivo = path.resolve(__dirname,'..' ,'teste.txt');



// caminho - texto que deseja escrever - objeto (apagar oq tiver no arquivo se ele existir, 
//enconding vai por padrao utf8) enconding: 'utf8'
// flag: 'a' - ele adiciona ao final e nao apaga o conteudo
//fs.writeFile(caminhoArquivo, 'Frase 1\n', {flag: 'a'});
module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'});
}



