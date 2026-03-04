import { somar } from "./funcaosoma.js";
import { subtrair } from "./funcaosubtrair.js";
import { multiplicar } from "./funcaomultiplicar.js";
import { dividir } from "./funcaodividir.js";

window.inserirNaTela = inserirNaTela;
window.limpar = limpar;
window.resultado = resultado;

function inserirNaTela(data) {
    document.querySelector('#tela').value += data;
}

function limpar() {
    document.querySelector('#tela').value = '';
}

function resultado() {
    const tela = document.querySelector('#tela').value;
    
    let operacao;
    let sinal;


    if (tela.includes('+')) {
        sinal = '+';
    } else if (tela.includes('-')) {
        sinal = '-';
    } else if (tela.includes('*')) {
        sinal = '*';
    } else if (tela.includes('/')) {
        sinal = '/';
    }

    if (sinal) {

        const partes = tela.split(sinal);
        const num1 = parseFloat(partes[0]);
        const num2 = parseFloat(partes[1]);
        let res = 0;

        if (sinal === '+') {
            res = somar(num1, num2);
        } else if (sinal === '-') {
            res = subtrair(num1, num2);
        } else if (sinal === '*') {
            res = multiplicar(num1, num2);
        } else if (sinal === '/') {
            res = dividir(num1, num2);
        }

        document.querySelector('#tela').value = res;
    }
}