// IMportando
// const mod1 = require('./mode1').falaNome; // Nesse momento importo apenas a funcao.
//const {nome, sobrenome, falaNome} = require('./mode1'); // Desestruturaçao
// const mod1 = require('./mode1');

// console.log(mod1.falaNome())

const {Pessoa} = require('./mode1');
const p1 = new Pessoa('Maciel');
console.log(p1);