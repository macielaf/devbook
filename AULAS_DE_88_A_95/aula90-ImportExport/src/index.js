// Manual : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import

// Se quiser usar uma constante com mesmo nome do import
//Precisa renomear ela usando as. exe: nome as nome2

// import qualquerNome from './modulo1' // 
import qualquerNome from './modulo1'
import {nome, sobrenome, idade, Carro   } from './modulo1';

console.log(nome, sobrenome, idade);
console.log(qualquerNome(10, 2));

const carro1 = new Carro('Fusca', 92);
console.log(carro1);

