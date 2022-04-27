// Formas de exportar um objeto

// const nome = 'Maciel';
// const sobrenome = 'Ferreira';

// const falaNome = () => nome+ ' ' +sobrenome;


// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome; // nao precisa usar ()
// this.qualquercoisa = 'Qualquer coisa'; // this tambem entra aqui.
// console.log(module.exports);


class Pessoa {
    constructor(nome){
        this.nome =nome;
    }
    
};

exports.Pessoa = Pessoa;