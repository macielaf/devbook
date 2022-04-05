import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

// funcao que executa ao iniciar o html
(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();
