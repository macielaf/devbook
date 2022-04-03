export const nome = 'Maciel';
export const sobrenome = 'Ferreira';
export const idade = 43;

// Desta forma não preciso importar o nome soma, qualquer nome que eu por vai funcionar
export default function soma ( x, y){ return x + y};

// Posso exportar direto na constante se quiser coloccando um export antes da constante, classe etc
//export{nome, sobrenome, idade, soma};

export class Carro{
    constructor(modelo, ano){
        this.ano = ano,
        this.modelo = modelo
    }
    
};