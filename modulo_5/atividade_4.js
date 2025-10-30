/*Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre 
a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. 
Veja os exemplos abaixo: */
import readline from 'readline-sync'

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let diferenca = 0;

n1 = readline.questionFloat("\nDigite o valor de n1: ");
n2 = readline.questionFloat("Digite o valor de n2: ");
n3 = readline.questionFloat("Digite o valor de n3: ");
n4 = readline.questionFloat("Digite o valor de n4: ");

diferenca = (n1 * n2) - (n3 * n4);

console.log (`\nDiferença : ${diferenca.toFixed(1)}`);
//console.log (`\n(${n1} * ${n2}) - (${n3} * ${n4}) = ${diferenca.toFixed(1)}`);

