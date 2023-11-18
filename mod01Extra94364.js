// import prompt from 'prompt';
const prompt = require('prompt-sync')();

// entrada de dados
let valor1 = Number(prompt("Digite o 1º valor: "));
let valor2 = Number(prompt("Digite o 2º valor: "));
//let operador = Symbol(prompt("Digite o simbolo (+, -, * ou /): "));
let operador = String(prompt("Digite o símbolo (+, -, * ou /): "));

// processamento
let resultado = 0;
if (operador == "+") {
    resultado = (valor1 + valor2);
}
if (operador == "-") {
    resultado = (valor1 - valor2);
}
if (operador == "*") {
    resultado = (valor1 * valor2);
}
if (operador == "/") {
    resultado = (valor1 / valor2);
}

// saída de dados
console.log(resultado);