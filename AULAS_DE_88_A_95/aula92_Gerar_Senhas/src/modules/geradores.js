const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraMNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '.,;:*&ˆ+%$#@!{}[]_-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];//Pega um indice aleatorio

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolo){
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i=0; i < qtd; i++){
        maiuscula && senhaArray.push(geraMaiuscula()); // Curto cirquito, se for verdadeiro executa
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraMNumero());
        simbolo && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}

