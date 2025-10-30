//1) Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript:

import readline from 'readline-sync';

let salario = 0;
let abono = 0;
let novoSalario = 0;

salario = readline.questionFloat("Digite o salario: ");
abono = readline.questionFloat("Digite o abono: ");

novoSalario = salario + abono;

console.log("Novo salário: " + novoSalario.toFixed(2));
