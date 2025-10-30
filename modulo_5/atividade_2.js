/*Elabore um algoritmo em JavaScript que leia 4 notas de um 
participante, exiba na tela a média final do participante. 
Veja o exemplo abaixo: */

import readline from 'readline-sync';

let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let mediaFinal = 0;
let status = "";

nota1 = readline.questionFloat("Digite o valor da nota 1: ");
nota2 = readline.questionFloat("Digite o valor da nota 2: ");
nota3 = readline.questionFloat("Digite o valor da nota 3: ");
nota4 = readline.questionFloat("Digite o valor da nota 4: ");
mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

if(mediaFinal >= 7){
    status = "Aprovado";
} else if (mediaFinal >=4){
    status = "Recuperação";
}  else {
    status = "Reprovado"
}

console.log("\nMedia final: " + mediaFinal.toFixed(1) + "\nStatus do aluno: " + status);

