/* 
Escreva um algoritmo, que leia 2 números inteiros via teclado, 
onde o primeiro número deve ser menor do que o segundo número. 
Caso contrário, deve ser exibida uma mensagem na tela informando 
que o intervalo é inválido e sair do programa. 

No intervalo informado, mostre na tela todos os números que são 
múltiplos de 3 e 5. Veja os exemplos abaixo:

*/

import readline from 'readline-sync';

let condicao;


console.log("## Digite dois números, o primeiro deve ser menor que o segundo ##");
let numero1 = readline.questionInt("Digite o valor do primeiro numero: ");
let numero2 = readline.questionInt("Digite o valor do segundo numero: ");
let contador = 0;
console.log("");//um enter antes da resposta
if(numero1 >= numero2){
    console.log("Intervalo inválido. Encerrando a aplicação...");
    process.exit();
} 

for(let i = numero1; i <= numero2; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} é múltiplo de 3 e 5`);
    }
}


