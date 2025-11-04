/*
Escreva um programa para criar uma Collection Set do tipo number. 
O programa deverá solicitar ao usuário, que ele digite via teclado 
10 valores inteiros não repetidos e adicione-os individualmente na 
Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set.  
*/

import * as readlinesync from "readline-sync";

let entrada:number;

const numeros: Set<number> = new Set<number>();
//const numerosArray: Array<number> = new Array<number>();

for(let i = 0; i < 10; i++){
    entrada = readlinesync.questionInt("Digite um numero inteiro: ", 
    {limitMessage: "Digite um numero inteiro!"});
    numeros.add(entrada);
}

const numerosArray = Array.from(numeros);

numerosArray.sort((a, b) => a - b); //argumento 100% resposta do google
console.log("\nListar dados do Set: ");
for(let numeroArray of numerosArray){
    console.log(numeroArray);
}

