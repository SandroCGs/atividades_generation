/*
Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário 
irá digitar um número e o programa deve exibir na tela a posição deste número 
no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” 
deve ser exibida na tela.
*/

import readline from 'readline-sync';

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let leitor = 0;
let condicao = false;


leitor = readline.questionInt("\nDigite um valor: ");
//for (let j = 0; j < 12; j++){ //* teste automatizado
//leitor = j; //*

for (let i = 0; i < 10; i++){
    
    if (leitor == vetor[i]){
        console.log(`O número ${leitor} está localizado na posição: ${i}\n`);
        condicao = true;
    } 
    if(condicao == false && i == 9)
        console.log(`O número ${leitor} não foi encontrado!\n`);
}
//condicao = false; //*
//} //*

