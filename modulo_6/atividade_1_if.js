/* Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
imprima na tela se a soma de A + B é maior, menor ou igual a C.*/

import readline from 'readline-sync';

// let valor_a=0;
// let valor_b=0;
// let valor_c=0;

let valor_a = readline.questionInt("\nDigite o valor de A: ");
let valor_b = readline.questionInt("Digite o valor de B: ");
let valor_c = readline.questionInt("Digite o valor de C: ");

console.log(""); //pular linha para apresentar resultado

if((valor_a+valor_b) > valor_c){
    console.log(valor_a + " + " + valor_b + " = " + (valor_a + valor_b) + " > " + valor_c);
    console.log("A Soma de A + B é Maior do que C");
} else if ((valor_a+valor_b) < valor_c){
    console.log(valor_a + " + " + valor_b + " = " + (valor_a + valor_b) + " < " + valor_c);
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log(valor_a + " + " + valor_b + " = " + (valor_a + valor_b) + " = " + valor_c);
    console.log("A Soma de A + B é Igual do que C");
}