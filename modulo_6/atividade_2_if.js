/*
Escreva um algoritmo que leia um número inteiro via 
teclado e mostre na tela uma mensagem indicando se este 
número é par ou ímpar e se o número é positivo ou negativo 
*/

import readline from 'readline-sync';

let numero = readline.questionInt("Digite um numero: ");

console.log(""); //pular linha para apresentar resultado

if(numero % 2 == 0 && numero > 0){
    console.log(`O número ${numero} é par e positivo.`);
} else if (numero % 2 == 0 && numero < 0){
    console.log(`O número ${numero} é par e negativo.`);
} else if (numero % 2 != 0 && numero > 0){
    console.log(`O número ${numero} é impar e positivo.`);
} else if (numero % 2 != 0 && numero < 0){
    console.log(`O número ${numero} é impar e negativo.`);
} else {
    console.log(`O número ${numero} é zero.`);
}