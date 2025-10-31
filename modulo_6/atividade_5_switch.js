/*
Com base na tabela abaixo, escreva um algoritmo que leia o código 
de um item (número inteiro entre 1 e 6) e a quantidade comprada 
deste item (número inteiro). A seguir, mostre na tela o valor total 
da conta e o nome do produto que foi comprado.
*/

import readline from 'readline-sync';

let codigo = 1;
let quantidade = 0;
let preco = 0.0;

while (codigo != 0) {
    codigo = readline.questionInt("Digite o codigo do pedido: ");
    quantidade = readline.questionInt("Digite a quantidade: ");


    switch (codigo) {
        case 1:
            preco = quantidade * 10.00;
            console.log("Produto: Cachorro Quente\nValor total: R$ " + preco.toFixed(2) + "\n");
            break;
        case 2:
            preco = quantidade * 15.00;
            console.log("Produto: X-Salada\nValor total: R$ " + preco.toFixed(2) + "\n");
            break;
        case 3:
            preco = quantidade * 18.00;
            console.log("Produto: X-Bacon\nValor total: R$ " + preco.toFixed(2) + "\n");
            break;
        case 4:
            preco = quantidade * 12.00;
            console.log("Produto: Bauru\nValor total: R$ " + preco.toFixed(2) + "\n");
            break;
        case 5:
            preco = quantidade * 8.00;
            console.log("Produto: Refrigerante\nValor total: R$ " + preco.toFixed(2) + "\n");
            break;
        case 6:
            preco = quantidade * 13.00;
            console.log("Produto: Suco de laranja\nValor total: R$ " + preco.toFixed(2) + "\n");
            break;
        default:
            console.log("valor inválido! Encerrando...");
    }
}