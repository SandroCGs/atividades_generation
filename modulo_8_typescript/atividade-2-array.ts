/*
Escreva um programa para criar uma Collection Array do tipo number, 
inicializada com 10 valores inteiros. O programa deverá solicitar ao 
usuário, que ele digite via teclado 1 número inteiro e caso ele seja 
encontrado no Array, exiba na tela a posição deste número na Collection. 
Caso o número não seja encontrado, o programa deverá exibir na tela a 
mensagem: O número NN não foi encontrado!
*/

import * as readlinesync from "readline-sync";

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let entrada = readlinesync.questionInt("\nDigite um numero inteiro: ", 
    {limitMessage: "Digite um numero inteiro!"});

if(numeros.includes(entrada) == true)
    console.log(`O número ${entrada} está localizado na posição: ${numeros.indexOf(entrada)}`);
else 
    console.log(`O número ${entrada} não foi encontrado!`);

//! Laços de Repetição
/*
let condicao: boolean = false;
for(let numero of numeros){
    if(numero == entrada){
        console.log(`O número ${entrada} está localizado na posição: ${numeros.indexOf(entrada)}`);
        condicao = true; 
    }
}
if (condicao == false){
    console.log(`O número ${entrada} não foi encontrado!`);
}
*/
