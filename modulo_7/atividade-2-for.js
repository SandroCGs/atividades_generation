/*
Escreva um algoritmo, que leia 10 números inteiros via teclado e 
mostre na tela quantos números são pares e quantos número são ímpares. 
Veja o exemplo abaixo:
*/

import readline from 'readline-sync';

let numero = 0;
let contadorPar = 0;
let contadorImpar = 0;

for(let i = 0; i < 10; i++){
    numero = readline.questionInt("Digite um numero inteiro: ");
    if (numero % 2 == 0){
        contadorPar++;
    } else {
        contadorImpar++;
    }
}

console.log(`\nTotal de números pares: ${contadorPar}\nTotal de números ímpares: ${contadorImpar}\n`);