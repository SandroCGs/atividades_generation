/*
Escreva um algoritmo, que leia números inteiros via teclado, 
até que o número zero seja digitado. Ao final, mostre na tela 
a soma de todos os números digitados, que sejam positivos.
*/
import readline, { questionInt } from 'readline-sync';

let somaNumero = 0;
let leitor = 0;

do {

    leitor = readline.questionInt("Digite um numero diferente de zero: ");
    if(leitor > 0){
        somaNumero += leitor
    }

} while (leitor != 0);

console.log(`\nA soma dos números positivos é: ${somaNumero}`);