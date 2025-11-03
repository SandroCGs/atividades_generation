/*
Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 
anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos 
dados deve ser finalizada ao digitar uma idade negativa
*/
import readline from 'readline-sync';

let idadeMenor = 0;
let idadeMaior = 0;
let idade = 0;

console.log("\n## Digite o valor da idade, para sair da aplicação digite um número negativo ##\n");

while(idade >= 0){
    idade = readline.questionInt("Digite um valor de idade: ");
    if (idade < 21 && idade > 0)
        idadeMenor++;
    
    if (idade > 50)
        idadeMaior++;
    //Para apresentar durante a coleta de dados, incluindo as chaves no segundo if 
    //console.log(`\nTotal de pessoas menores de 21 anos: ${idadeMenor}\nTotal de pessoas maiores de 50 anos: ${idadeMaior}`)
}

console.log(`\nTotal de pessoas menores de 21 anos: ${idadeMenor}\nTotal de pessoas maiores de 50 anos: ${idadeMaior}`);